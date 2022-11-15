import { useCallback } from 'react';

import GameLettersState from '../models/game-letter-state.model';
import GameLetterStatus from '../models/game-letter-status.model';

import useLocalStorage from './useLocalStorage';

interface StoredLines {
  [key: string]: GameLettersState[][];
}

export type SetLinesAction = (lines: GameLettersState[][]) => void;

function useLineStorage(
  word: string,
): [GameLettersState[][], SetLinesAction] {
  const initial = {
    [word]: [[{
      letter: word?.at(0) ?? '',
      status: GameLetterStatus.CORRECT,
    }]],
  };
  const [storedLines, setStoredLines] = useLocalStorage<StoredLines>('lines', initial, true);

  if (!storedLines[word]) {
    storedLines[word] = initial[word];
    setStoredLines(storedLines);
  }

  const setValue = useCallback((lines: GameLettersState[][]) => {
    const newStored = { ...storedLines };
    newStored[word] = lines;

    setStoredLines(newStored);
  }, [storedLines, word]);

  return [storedLines[word], setValue];
}

export default useLineStorage;
