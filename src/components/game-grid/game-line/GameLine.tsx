import Letter from '@components/game-grid/letter/Letter';
import GameLettersState from '@models/game-letter-state.model';
import GameLetterStatus from '@models/game-letter-status.model';
import './GameLine.scss';

interface Props {
  size: number;
  letters?: GameLettersState[];
}

function GameLine({ size, letters = [] }: Props) {
  const lettersComponent = Array.from({ length: size }, (_, index) => {
    const letter = letters[index]?.letter ?? '';
    const status = letters[index]?.status ?? GameLetterStatus.INCORRECT;
    return (
      <Letter
        key={`${index}-${letter}-${status}`}
        letter={letter}
        status={status}
      />
    );
  });

  return <span className="game-line">{lettersComponent}</span>;
}

export default GameLine;
