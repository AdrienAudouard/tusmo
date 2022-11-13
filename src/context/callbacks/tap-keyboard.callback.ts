import { SetLinesAction } from '../../hooks/useLineStorage';
import GameLettersState from '../../models/game-letter-state.model';
import GameLetterStatus from '../../models/game-letter-status.model';
import isGameWin from '../../utils/game-utils';
import { Result } from '../game.context';

function updateLine(line: GameLettersState[], word: string): GameLettersState[] {
  const updatedLines = [...line];

  return updatedLines.map((element, index) => {
    if (word.at(index) === element.letter) {
      return { letter: element.letter, status: GameLetterStatus.CORRECT };
    }

    if (word.includes(element.letter)) {
      return { letter: element.letter, status: GameLetterStatus.INCORRECT_PLACE };
    }

    return { letter: element.letter, status: GameLetterStatus.INCORRECT };
  });
}

function createNextLine(line: GameLettersState[]): GameLettersState[] {
  return line.map((e) => (e.status === GameLetterStatus.CORRECT ? e : {
    letter: '',
    status: GameLetterStatus.INCORRECT,
  }));
}

function createTapKeyboardCallback(
  word: string,
  lines: GameLettersState[][],
  setLines: SetLinesAction,
  result: Result,
): (letter: string) => void {
  return (letter: string) => {
    if (result.isWon || result.isLost) {
      return;
    }

    const updatedLines = [...lines];
    const latestLine = updatedLines[updatedLines.length - 1];

    /*
     [true] if the line contains an empty char
     */
    const lineContainEmpty = latestLine.find((element) => element.letter === '') != null;

    if (letter === 'ENTRER') {
      if (latestLine.length !== word?.length || lineContainEmpty) {
        return;
      }

      const updatedLastLine = updateLine(latestLine, word);
      updatedLines[updatedLines.length - 1] = updatedLastLine;

      if (!isGameWin(updatedLines, word)) {
        updatedLines.push(createNextLine(updatedLastLine));
      }

      setLines(updatedLines);
      return;
    }

    if (letter === 'SUPPR') {
      if (latestLine.length === 1) {
        return;
      }

      while (latestLine[latestLine.length - 1].letter === '') {
        latestLine.pop();
      }

      latestLine.pop();

      while (latestLine[latestLine.length - 1].letter === '' && latestLine.length > 1) {
        latestLine.pop();
      }

      setLines(updatedLines);
      return;
    }

    if (latestLine.length === word?.length && !lineContainEmpty) {
      return;
    }

    if (lineContainEmpty) {
      const index = latestLine.findIndex((element) => element.letter === '');
      latestLine[index] = { letter, status: GameLetterStatus.INCORRECT };
    } else {
      latestLine.push({ letter, status: GameLetterStatus.INCORRECT });
    }
    setLines(updatedLines);
  };
}

export default createTapKeyboardCallback;
