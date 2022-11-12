import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import GameBoard from './GameBoard';

export default {
  title: 'Components/GameBoard',
  component: GameBoard,
} as ComponentMeta<typeof GameBoard>;

export const Default: ComponentStory<typeof GameBoard> = function () {
  return <GameBoard wordSize={6} />;
};
