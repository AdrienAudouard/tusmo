import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { setUserId } from '../../utils/analytics/analytics-utils';
import generateRandomId from '../../utils/generate-random-id';
import { generateRandomPseudo } from '../../utils/generate-random-pseudo';
import UserInformationsState from './models/user-informations-state';

export const UserInformationsContext = createContext(
  {} as UserInformationsState
);

function UserInformationsProvider({ children }: PropsWithChildren) {
  const [userId] = useLocalStorage<string>('user-id', generateRandomId(), true);
  const [pseudo, setPseudo] = useLocalStorage<string>(
    'pseudo',
    generateRandomPseudo(),
    true
  );

  useEffect(() => {
    setUserId(userId);
  }, [userId]);

  const generateNewPseudo = useCallback(() => {
    setPseudo(generateRandomPseudo());
  }, [setPseudo]);

  const contextValue = useMemo<UserInformationsState>(
    () => ({
      userId,
      pseudo,
      generateNewPseudo,
    }),
    [userId, pseudo]
  );

  return (
    <UserInformationsContext.Provider value={contextValue}>
      {children}
    </UserInformationsContext.Provider>
  );
}

export const useUserInformations = () => useContext(UserInformationsContext);

export default UserInformationsProvider;
