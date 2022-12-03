import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import KeyboardType from '../keyboard/keyboard/keyboard-type';

import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = function () {
  return <Select values={[KeyboardType.AZERTY, KeyboardType.QWERTY]} />;
};
