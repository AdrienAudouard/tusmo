import GameLetterStatus from '@models/game-letter-status.model';
import './Letter.scss';

export interface Props {
  letter?: string;
  status: GameLetterStatus;
  index?: number;
}

function Letter({ letter, status, index }: Props) {
  return <div className={`letter letter-${status} letter-${index} test`}>{letter}</div>;
}

export default Letter;
