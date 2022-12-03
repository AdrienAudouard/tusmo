import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import KeyboardLetterStatusModels from '../../../models/keyboard-letter-status.model';
import KeyboardLine from './KeyboardLine';

export default {
  title: 'Components/Keyboard/Line',
  component: KeyboardLine,
} as ComponentMeta<typeof KeyboardLine>;

export const Empty: ComponentStory<typeof KeyboardLine> = function () {
  return <KeyboardLine letters={['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']} lettersState={{}} />;
};

export const DifferentStatus: ComponentStory<typeof KeyboardLine> = function () {
  return (
    <KeyboardLine
      letters={['A', 'Z', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']}
      lettersState={{
        Z: KeyboardLetterStatusModels.USED,
        I: KeyboardLetterStatusModels.USED,
        R: KeyboardLetterStatusModels.CORRECT,
        U: KeyboardLetterStatusModels.INCORRECT_PLACE,
      }}
    />
  );
};
