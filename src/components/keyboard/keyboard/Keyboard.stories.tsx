import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import KeyboardLetterStatusModels from '../../../models/keyboard-letter-status.model';
import Keyboard from './Keyboard';
import KeyboardType from './keyboard-type';

export default {
  title: 'Components/Keyboard/Keyboard',
  component: Keyboard,
  args: {
    keyboardType: KeyboardType.AZERTY,
  },
  argTypes: {
    keyboardType: {
      options: [KeyboardType.AZERTY, KeyboardType.QWERTY],
    },
  },
} as ComponentMeta<typeof Keyboard>;

export const Empty: ComponentStory<typeof Keyboard> = function (args) {
  const { keyboardType } = args;

  return <Keyboard lettersState={{}} keyboardType={keyboardType ?? KeyboardType.AZERTY} />;
};

export const DifferentStatus: ComponentStory<typeof Keyboard> = function (args) {
  const { keyboardType } = args;
  return (
    <Keyboard
      keyboardType={keyboardType}
      lettersState={{
        Z: KeyboardLetterStatusModels.USED,
        H: KeyboardLetterStatusModels.USED,
        D: KeyboardLetterStatusModels.USED,
        I: KeyboardLetterStatusModels.USED,
        R: KeyboardLetterStatusModels.CORRECT,
        W: KeyboardLetterStatusModels.CORRECT,
        X: KeyboardLetterStatusModels.CORRECT,
        U: KeyboardLetterStatusModels.INCORRECT_PLACE,
        K: KeyboardLetterStatusModels.INCORRECT_PLACE,
        V: KeyboardLetterStatusModels.INCORRECT_PLACE,
      }}
    />
  );
};
