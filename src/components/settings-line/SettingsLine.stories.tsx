import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { SlSettings } from 'react-icons/sl';

import Card from '../card/Card';
import Select from '../select/Select';

import SettingsLine from './SettingsLine';

export default {
  title: 'Components/SettingsLine',
  component: SettingsLine,
  parameters: {
    layout: 'center',
  },
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
} as ComponentMeta<typeof SettingsLine>;

export const Default: ComponentStory<typeof SettingsLine> = function () {
  return (
    <SettingsLine
      icon={<SlSettings />}
      title="Keyboard"
      description="Select the type of keyboard you want"
      action={<Select />}
    />
  );
};
