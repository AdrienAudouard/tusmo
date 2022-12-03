import React from 'react';
import KeyboardLetterStatusModels from '../../../models/keyboard-letter-status.model';
import KeyboardLettersState from '../../../models/keyboard-letters-state.model';
import KeyboardLetter from '../keyboard-letter/KeyboardLetter';
import './KeyboardLine.scss';

interface Props {
  letters: string[];
  lettersState: KeyboardLettersState;
  isLastLine?: boolean;
}

function KeyboardLine({ letters, lettersState = {}, isLastLine = false }: Props) {
  return (
    <span className="keyboard-line">
      {
        isLastLine ? (
          <KeyboardLetter
            key="SUPPR"
            letter="SUPPR"
            status={KeyboardLetterStatusModels.NOT_USED}
          />
        ) : null
}
      {
        letters
          .map((e) => (
            <KeyboardLetter
              key={e}
              letter={e}
              status={lettersState[e] ?? KeyboardLetterStatusModels.NOT_USED}
            />
          ))
}
      { isLastLine ? (
        <KeyboardLetter
          key="ENTRER"
          letter="ENTRER"
          status={KeyboardLetterStatusModels.NOT_USED}
        />
      ) : null }
    </span>
  );
}

export default KeyboardLine;
