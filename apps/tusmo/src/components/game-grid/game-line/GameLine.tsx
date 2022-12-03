import './GameLine.scss';
import GameLettersState from '../../../models/game-letter-state.model';
import GameLetterStatus from '../../../models/game-letter-status.model';
import Letter from '../letter/Letter';
import React from 'react'

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
        index={index}
      />
    );
  });

  return <span className="game-line">{lettersComponent}</span>;
}

export default GameLine;
