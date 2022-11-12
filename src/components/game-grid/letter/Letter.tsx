import './Letter.scss';
import GameLetterStatus from '../../../models/game-letter-status.model';

export interface Props {
  letter?: string;
  status: GameLetterStatus;
}

function Letter({ letter, status }: Props) {
  return <div className={`letter letter-${status}`}>{letter}</div>;
}

export default Letter;
