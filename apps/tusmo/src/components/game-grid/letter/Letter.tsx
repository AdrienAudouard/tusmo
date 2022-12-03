import './Letter.scss';
import React from 'react';
import GameLetterStatus from '../../../models/game-letter-status.model';

export interface Props {
  letter?: string;
  status: GameLetterStatus;
  index?: number;
}

function Letter({ letter, status, index }: Props) {
  return <div className={`letter letter-${status} letter-${index} test`}>{letter}</div>;
}

export default Letter;
