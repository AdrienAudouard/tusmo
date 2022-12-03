import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'center',
  },
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = function () {
  return <Card><div>I am a card</div></Card>;
};
