import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import GameLetterStatus from '../../../models/game-letter-status.model';
import Letter from './Letter';

export default {
  title: 'Components/Grid/Letter',
  component: Letter,
} as ComponentMeta<typeof Letter>;

export const Correct: ComponentStory<typeof Letter> = function () {
  return <Letter letter="A" status={GameLetterStatus.CORRECT} />;
};

export const Incorrect: ComponentStory<typeof Letter> = function () {
  return <Letter letter="A" status={GameLetterStatus.INCORRECT} />;
};

export const IncorrectPlace: ComponentStory<typeof Letter> = function () {
  return <Letter letter="A" status={GameLetterStatus.INCORRECT_PLACE} />;
};
