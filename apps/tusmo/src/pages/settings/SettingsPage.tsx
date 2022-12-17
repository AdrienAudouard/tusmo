import React from 'react';
import { SlSettings } from 'react-icons/sl';
import Card from '../../components/card/Card';
import KeyboardType from '../../components/keyboard/keyboard/keyboard-type';
import Select from '../../components/select/Select';
import SettingsLine from '../../components/settings-line/SettingsLine';
import { useUserInformations } from '../../context/user-informations/user-informations.context';
import { useUserPreferences } from '../../context/user-preferences/user-preferences.context';

import './SettingsPage.scss';

function SettingsPage() {
  const { keyboardType, setKeyboardType } = useUserPreferences();
  const { pseudo, generateNewPseudo } = useUserInformations();

  const clearLines = () => {
    window.localStorage.removeItem('lines');
  };

  const onKeyboardTypeChange = (value: string) => {
    setKeyboardType(value);
  };

  return (
    <Card className="settings-page">
      <h1 className="settings-page__title">Settings</h1>
      <div className="settings-page__settings-container">
        <SettingsLine
          icon={<SlSettings />}
          title="Change your pseudo"
          description={`Your pseudo is ${pseudo}`}
          action={
            <button type="button" onClick={generateNewPseudo}>
              Edit
            </button>
          }
        />

        <SettingsLine
          icon={<SlSettings />}
          title="Keyboard"
          description="Select the type of keyboard you want"
          action={
            <Select
              values={[KeyboardType.AZERTY, KeyboardType.QWERTY]}
              selected={keyboardType}
              onChange={onKeyboardTypeChange}
            />
          }
        />

        <SettingsLine
          icon={<SlSettings />}
          title="Clear data"
          description="Remove all the data, this will remove your game history."
          action={
            <button type="button" onClick={clearLines}>
              Clear
            </button>
          }
        />
      </div>
    </Card>
  );
}

export default SettingsPage;
