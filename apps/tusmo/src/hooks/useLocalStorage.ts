import { useCallback, useState } from 'react';
import { base64ToUtf8, utf8ToBase64 } from '../utils/encoding';

function getValueToStore(value: any, isEncoded = false): string {
  return isEncoded
    ? utf8ToBase64(JSON.stringify(value)) : JSON.stringify(value);
}

function useLocalStorage<T>(key: string, initialValue: T, isEncoded = false) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);

      if (!item) {
        window.localStorage.setItem(key, getValueToStore(initialValue, isEncoded));
      }

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
        const toStore = getValueToStore(valueToStore, isEncoded);
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
