import GameGrid from '@components/game-grid/game-grid/GameGrid';
import Keyboard from '@components/keyboard/keyboard/Keyboard';
import GameLettersState from '@models/game-letter-state.model';
import KeyboardLettersState from '@models/keyboard-letters-state.model';

interface Props {
  wordSize: number;
  lines?: GameLettersState[][];
  keyboardLettersState?: KeyboardLettersState;
}

function GameBoard({ wordSize, lines, keyboardLettersState }: Props) {
  return (
    <div className="game-board">
      <GameGrid wordSize={wordSize} letters={lines} />
      <Keyboard
        lettersState={keyboardLettersState ?? {}}
      />
    </div>
  );
}

export default GameBoard;
