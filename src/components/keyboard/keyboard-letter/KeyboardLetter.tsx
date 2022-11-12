import { useGame } from '../../../context';
import KeyboardLetterStatusModels from '../../../models/keyboard-letter-status.model';
import './KeyboardLetter.scss';

interface Props {
  letter: string;
  status: KeyboardLetterStatusModels;
}

function KeyboardLetter({ letter, status }: Props) {
  const { tapKeyboard } = useGame();

  return (
    <button
      className={`keyboard-letter keyboard-letter__${status}`}
      type="button"
      onClick={() => tapKeyboard(letter)}
    >
      {letter}
    </button>
  );
}

export default KeyboardLetter;
