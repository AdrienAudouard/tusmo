import KeyboardLettersState from '../../../models/keyboard-letters-state.model';
import KeyboardLine from '../keyboard-line/KeyboardLine';
import KeyboardType from './keyboard-type';
import './Keyboard.scss';

const azertyLetters = [
  ['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['Q', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M'],
  ['W', 'X', 'C', 'V', 'B', 'N'],
];

const qwertyLetters = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

interface Props {
  lettersState: KeyboardLettersState;
  keyboardType?: KeyboardType;
}

function Keyboard({ lettersState = {}, keyboardType = KeyboardType.AZERTY } : Props) {
  const letters = keyboardType === KeyboardType.AZERTY ? azertyLetters : qwertyLetters;

  return (
    <span className="keyboard">
      { letters.map((e, index) => (
        <KeyboardLine
          key={e.toString()}
          letters={e}
          lettersState={lettersState}
          isLastLine={index === (letters.length - 1)}
        />
      )) }
    </span>
  );
}

export default Keyboard;
