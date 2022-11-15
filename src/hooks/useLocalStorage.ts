import { useCallback, useState } from 'react';

import { base64ToUtf8, utf8ToBase64 } from '@utils/encoding';

function useLocalStorage<T>(key: string, initialValue: T, isEncoded = false) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      const decodedItem = isEncoded ? base64ToUtf8(item ?? '') : item ?? '';
      return item ? JSON.parse(decodedItem) : initialValue;
    } catch (error) {
      window.localStorage.removeItem(key);
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        const toStore = isEncoded
          ? utf8ToBase64(JSON.stringify(valueToStore)) : JSON.stringify(valueToStore);
        setStoredValue(valueToStore);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, toStore);
        }
      } catch (error) {
        /// To manage
      }
    },
    [key, storedValue, isEncoded],
  );

  return [storedValue, setValue];
}

export default useLocalStorage;
