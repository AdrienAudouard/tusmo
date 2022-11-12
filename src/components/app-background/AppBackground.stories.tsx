import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import AppBackground from './AppBackground';

export default {
  title: 'Components/AppBackground',
  component: AppBackground,
  parameters: {
    layout: 'center',
  },
} as ComponentMeta<typeof AppBackground>;

export const Default: ComponentStory<typeof AppBackground> = function () {
  return <AppBackground />;
};
