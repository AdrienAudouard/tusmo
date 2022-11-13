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
import GameLettersState from '../models/game-letter-state.model';
import GameLetterStatus from '../models/game-letter-status.model';
import KeyboardLetterStatusModels from '../models/keyboard-letter-status.model';
import KeyboardLettersState from '../models/keyboard-letters-state.model';

import createTapKeyboardCallback from './callbacks/tap-keyboard.callback';

type Result = {
  isWon: boolean; isLost: boolean
};

type GameState = {
  word: string | null;
  result: Result;
  lines?: GameLettersState[][];
  keyboardLettersState: KeyboardLettersState;
  tapKeyboard: (letter: string) => void;
};

export const GameContext = createContext({} as GameState);

function GameProvider({ children }: PropsWithChildren) {
  const [word] = useWord();
  const [lines, setLines] = useLineStorage(word);
  const [result, setResult] = useState<Result>({ isLost: false, isWon: false });
  const [keyboardLettersState, setKeyboardLetterState] = useState<KeyboardLettersState>({});

  const tapKeyboard = useCallback(createTapKeyboardCallback(word ?? '', lines, setLines), [lines]);

  useEffect(() => {
    const isWin = lines.find((line) => !line.find(
      (element) => element.status !== GameLetterStatus.CORRECT,
    )
        && line.length === word.length)
      != null;
    setResult({ isWon: isWin, isLost: false });
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
        }

        if (element.status === GameLetterStatus.INCORRECT_PLACE) {
          keyboardState[element.letter] = KeyboardLetterStatusModels.INCORRECT_PLACE;
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
  }), [word, lines, tapKeyboard, keyboardLettersState, result]);

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
}

export const useGame = () => useContext(GameContext);

export default GameProvider;
