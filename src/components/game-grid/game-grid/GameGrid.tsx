import GameLine from '@components/game-grid/game-line/GameLine';
import GameLettersState from '@models/game-letter-state.model';
import './GameGrid.scss';

interface Props {
  wordSize: number;
  letters?: GameLettersState[][];
}

function GameGrid({ wordSize, letters }: Props) {
  const lines = Array.from({ length: 6 }, (_, index) => (
    <GameLine key={index} size={wordSize} letters={(letters ?? [])[index] ?? []} />
  ));

  return <span className="game-grid">{lines}</span>;
}

export default GameGrid;