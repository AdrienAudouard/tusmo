import {
  createContext, PropsWithChildren, useCallback, useContext, useMemo,
} from 'react';
import KeyboardType from '../../components/keyboard/keyboard/keyboard-type';
import useLocalStorage from '../../hooks/useLocalStorage';
import UserPreferencesState from './models/user-preferences.state';
import React from 'react'

export const UserPreferencesContext = createContext<UserPreferencesState>({
  keyboardType: KeyboardType.AZERTY,
  setKeyboardType: () => {},
});

function UserPreferencesProvider({ children }: PropsWithChildren) {
  const [keyboardType, setLocalKeyboardType] = useLocalStorage<KeyboardType>('keyboard-type', KeyboardType.AZERTY, false);

  const setKeyboardType = useCallback((value: string) => {
    setLocalKeyboardType(value);
  }, [setLocalKeyboardType]);

  const contextValue = useMemo<UserPreferencesState>(() => ({
    keyboardType,
    setKeyboardType,
  }), [keyboardType,
    setKeyboardType]);

  return (
    <UserPreferencesContext.Provider value={contextValue}>
      {children}
    </UserPreferencesContext.Provider>
  );
}

export const useUserPreferences = () => useContext(UserPreferencesContext);

export default UserPreferencesProvider;
