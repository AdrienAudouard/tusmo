import { ComponentMeta, ComponentStory } from '@storybook/react';
import { number } from 'prop-types';
import React from 'react';
import GameLetterStatus from '../../../models/game-letter-status.model';
import GameLine from './GameLine';

export default {
  title: 'Components/Grid/Line',
  component: GameLine,
  args: {
    size: 7,
  },
  argTypes: {
    size: number,
  },
} as ComponentMeta<typeof GameLine>;

export const Empty: ComponentStory<typeof GameLine> = function (args) {
  const { size } = args;
  return <GameLine size={size} letters={[]} />;
};

export const FirstLine: ComponentStory<typeof GameLine> = function () {
  const letters = [{ letter: 'B', status: GameLetterStatus.CORRECT }];
  return <GameLine size={7} letters={letters} />;
};

export const Filled: ComponentStory<typeof GameLine> = function () {
  const letters = [
    { letter: 'B', status: GameLetterStatus.CORRECT },
    { letter: 'O', status: GameLetterStatus.INCORRECT },
    { letter: 'N', status: GameLetterStatus.INCORRECT },
  ];

  return (
    <GameLine
      size={7}
      letters={letters}
    />
  );
};

export const IncorrectPlaced: ComponentStory<typeof GameLine> = function () {
  const letters = [
    { letter: 'B', status: GameLetterStatus.CORRECT },
    { letter: 'N', status: GameLetterStatus.INCORRECT_PLACE },
    { letter: 'U', status: GameLetterStatus.INCORRECT_PLACE },
    { letter: 'C', status: GameLetterStatus.INCORRECT },
    { letter: 'O', status: GameLetterStatus.CORRECT },
    { letter: 'P', status: GameLetterStatus.INCORRECT },
    { letter: 'T', status: GameLetterStatus.INCORRECT },
  ];

  return (
    <GameLine
      size={7}
      letters={letters}
    />
  );
};

export const CorrectLine: ComponentStory<typeof GameLine> = function () {
  const letters = [
    { letter: 'B', status: GameLetterStatus.CORRECT },
    { letter: 'O', status: GameLetterStatus.CORRECT },
    { letter: 'N', status: GameLetterStatus.CORRECT },
    { letter: 'J', status: GameLetterStatus.CORRECT },
    { letter: 'O', status: GameLetterStatus.CORRECT },
    { letter: 'U', status: GameLetterStatus.CORRECT },
    { letter: 'R', status: GameLetterStatus.CORRECT },
  ];

  return (
    <GameLine
      size={7}
      letters={letters}
    />
  );
};
