import React from 'react';
import { SlSettings } from 'react-icons/sl';

import Card from '@components/card/Card';
import Select from '@components/select/Select';
import SettingsLine from '@components/settings-line/SettingsLine';

import './SettingsPage.scss';

function SettingsPage() {
  const clearLines = () => {
    window.localStorage.removeItem('lines');
  };

  return (
    <Card className="settings-page">
      <h1 className="settings-page__title">Settings</h1>
      <div className="settings-page__settings-container">
        <SettingsLine
          icon={<SlSettings />}
          title="Keyboard"
          description="Select the type of keyboard you want"
          action={<Select />}
        />

        <SettingsLine
          icon={<SlSettings />}
          title="Clear data"
          description="Remove all the data, this will remove your game history."
          action={<button type="button" onClick={clearLines}>Clear</button>}
        />
      </div>
    </Card>
  );
}

export default SettingsPage;
