import {
  createContext, PropsWithChildren, useEffect, useMemo,
} from 'react';

import UserInformationsState from '@context/user-informations/models/user-informations-state';
import useLocalStorage from '@hooks/useLocalStorage';
import { setUserId } from '@utils/analytics/analytics-utils';
import generateRandomId from '@utils/generate-random-id';

export const UserInformationsContext = createContext({} as UserInformationsState);

function UserInformationsProvider({ children }: PropsWithChildren) {
  const [userId] = useLocalStorage<string>('user-id', generateRandomId(), true);

  useEffect(() => {
    setUserId(userId);
  }, [userId]);

  const contextValue = useMemo<UserInformationsState>(() => ({ userId }), [userId]);

  return (
    <UserInformationsContext.Provider value={contextValue}>
      {children}
    </UserInformationsContext.Provider>
  );
}

export default UserInformationsProvider;
