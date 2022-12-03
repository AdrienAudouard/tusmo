import './GameGrid.scss';
import React from 'react';
import GameLettersState from '../../../models/game-letter-state.model';
import GameLine from '../game-line/GameLine';

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
