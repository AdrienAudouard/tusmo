import GameLettersState from '../../../models/game-letter-state.model';
import KeyboardLettersState from '../../../models/keyboard-letters-state.model';
import { Result } from './result';

export type GameState = {
  word: string | null;
  score: number;
  result: Result;
  lines?: GameLettersState[][];
  keyboardLettersState: KeyboardLettersState;
  tapKeyboard: (letter: string) => void;
};
