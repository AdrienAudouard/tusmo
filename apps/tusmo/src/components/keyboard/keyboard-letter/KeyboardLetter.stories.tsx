import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import KeyboardLetterStatusModels from '../../../models/keyboard-letter-status.model';
import KeyboardLetter from './KeyboardLetter';

export default {
  title: 'Components/Keyboard/Letter',
  component: KeyboardLetter,
} as ComponentMeta<typeof KeyboardLetter>;

export const Correct: ComponentStory<typeof KeyboardLetter> = function () {
  return <KeyboardLetter letter="A" status={KeyboardLetterStatusModels.CORRECT} />;
};

export const IncorrectPlace: ComponentStory<typeof KeyboardLetter> = function () {
  return <KeyboardLetter letter="A" status={KeyboardLetterStatusModels.INCORRECT_PLACE} />;
};

export const Used: ComponentStory<typeof KeyboardLetter> = function () {
  return <KeyboardLetter letter="A" status={KeyboardLetterStatusModels.USED} />;
};

export const NotUsed: ComponentStory<typeof KeyboardLetter> = function () {
  return <KeyboardLetter letter="A" status={KeyboardLetterStatusModels.NOT_USED} />;
};
