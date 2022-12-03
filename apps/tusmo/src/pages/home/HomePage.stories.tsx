import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import HomePage from './HomePage';

export default {
  title: 'Pages/Home',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

export const Default: ComponentStory<typeof HomePage> = function () {
  return <HomePage />;
};
