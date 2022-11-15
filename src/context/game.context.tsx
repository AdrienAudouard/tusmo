import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import useLineStorage from '../hooks/useLineStorage';
import useWord from '../hooks/useWord';
import GameLetterStatus from '../models/game-letter-status.model';
import KeyboardLetterStatusModels from '../models/keyboard-letter-status.model';
import KeyboardLettersState from '../models/keyboard-letters-state.model';
import isGameWin from '../utils/game-utils';
import Points from '../utils/points';

import createTapKeyboardCallback from './callbacks/tap-keyboard.callback';
import { GameState } from './models/game-state';
import { Result } from './models/result';

export const GameContext = createContext({} as GameState);

function GameProvider({ children }: PropsWithChildren) {
  const [word] = useWord();
  const [score, setScore] = useState(0);
  const [lines, setLines] = useLineStorage(word);
  const [result, setResult] = useState<Result>({ isLost: false, isWon: false });
  const [keyboardLettersState, setKeyboardLetterState] = useState<KeyboardLettersState>({});

  const tapKeyboard = useCallback(createTapKeyboardCallback(
    word ?? '',
    lines,
    setLines,
    result,
  ), [lines, result]);

  useEffect(() => {
    const isWin = isGameWin(lines, word);
    setResult({ isWon: isWin, isLost: false });
  }, [lines, word]);

  useEffect(() => {
    const toReduce = lines.map((line) => line.map((element) => {
      if (element.letter === '') {
        return 0;
      }

      if (element.status === GameLetterStatus.INCORRECT) {
        return Points.MALLUS_INCORRECT;
      }

      if (element.status === GameLetterStatus.INCORRECT_PLACE) {
        return Points.MALLUS_INCORRECT_PLACE;
      }

      return 0;
    }).reduce<number>((a, b) => a + b, 0))
      .reduce((a, b) => a + b, 0);

    setScore(Points.MAX_SCORE - toReduce);
  }, [lines]);

  useEffect(() => {
    const keyboardState: KeyboardLettersState = { ...keyboardLettersState };

    lines.forEach((line, lineIndex) => {
      line.forEach((element) => {
        if (keyboardState[element.letter] === KeyboardLetterStatusModels.CORRECT) {
          return;
        }

        if (element.status === GameLetterStatus.CORRECT) {
          keyboardState[element.letter] = KeyboardLetterStatusModels.CORRECT;
          return;
        }

        if (element.status === GameLetterStatus.INCORRECT_PLACE) {
          keyboardState[element.letter] = KeyboardLetterStatusModels.INCORRECT_PLACE;
          return;
        }

        if (line.length === word?.length && lineIndex !== (lines.length - 1)) {
          keyboardState[element.letter] = KeyboardLetterStatusModels.USED;
        }
      });
    });

    setKeyboardLetterState(keyboardState);
  }, [lines]);

  const contextValue = useMemo<GameState>(() => ({
    word,
    lines,
    tapKeyboard,
    keyboardLettersState,
    result,
    score,
  }), [word, lines, tapKeyboard, keyboardLettersState, result, score]);

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);

export default GameProvider;
