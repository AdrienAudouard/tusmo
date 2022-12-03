import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import GameLetterStatus from '../../../models/game-letter-status.model';
import GameGrid from './GameGrid';

export default {
  title: 'Components/Grid/Grid',
  component: GameGrid,
} as ComponentMeta<typeof GameGrid>;

export const Empty: ComponentStory<typeof GameGrid> = function () {
  return <GameGrid wordSize={7} />;
};

export const Start: ComponentStory<typeof GameGrid> = function () {
  const letters = [
    [{ letter: 'B', status: GameLetterStatus.CORRECT }],
  ];

  return <GameGrid wordSize={7} letters={letters} />;
};

export const Finished: ComponentStory<typeof GameGrid> = function () {
  const letters = [
    [
      { letter: 'B', status: GameLetterStatus.CORRECT },
      { letter: 'O', status: GameLetterStatus.CORRECT },
      { letter: 'N', status: GameLetterStatus.CORRECT },
      { letter: 'Q', status: GameLetterStatus.INCORRECT },
      { letter: 'U', status: GameLetterStatus.INCORRECT_PLACE },
      { letter: 'Q', status: GameLetterStatus.INCORRECT },
      { letter: 'J', status: GameLetterStatus.INCORRECT_PLACE },
    ],
    [
      { letter: 'B', status: GameLetterStatus.CORRECT },
      { letter: 'O', status: GameLetterStatus.CORRECT },
      { letter: 'N', status: GameLetterStatus.CORRECT },
      { letter: 'J', status: GameLetterStatus.CORRECT },
      { letter: 'Q', status: GameLetterStatus.INCORRECT },
      { letter: 'U', status: GameLetterStatus.CORRECT },
      { letter: 'D', status: GameLetterStatus.INCORRECT },
    ],
    [
      { letter: 'B', status: GameLetterStatus.CORRECT },
      { letter: 'O', status: GameLetterStatus.CORRECT },
      { letter: 'N', status: GameLetterStatus.CORRECT },
      { letter: 'J', status: GameLetterStatus.CORRECT },
      { letter: 'O', status: GameLetterStatus.CORRECT },
      { letter: 'U', status: GameLetterStatus.CORRECT },
      { letter: 'R', status: GameLetterStatus.CORRECT },
    ],
  ];

  return <GameGrid wordSize={7} letters={letters} />;
};
