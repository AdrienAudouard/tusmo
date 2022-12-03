import GameLettersState from '../models/game-letter-state.model';
import GameLetterStatus from '../models/game-letter-status.model';

function isGameWin(lines: GameLettersState[][], word: string): boolean {
  return lines.find((line) => !line.find(
    (element) => element.status !== GameLetterStatus.CORRECT,
  )
      && line.length === word.length)
    != null;
}

export default isGameWin;
