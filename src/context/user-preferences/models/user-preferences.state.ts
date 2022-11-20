import KeyboardType from '@components/keyboard/keyboard/keyboard-type';

type UserPreferencesState = {
  keyboardType: KeyboardType;
  setKeyboardType: (value: string) => void;
};

export default UserPreferencesState;
