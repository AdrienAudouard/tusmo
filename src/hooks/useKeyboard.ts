import { useEffect } from 'react';

function useKeyboard(listener: (key: KeyboardEvent) => void, element = window) {
  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener;
      if (!isSupported) return () => {};

      // Create event listener that calls handler function stored in ref
      const eventListener = (event: KeyboardEvent) => {
        if (event.altKey || event.ctrlKey || event.shiftKey || event.metaKey) {
          return;
        }

        listener(event);
      };

      // Add event listener
      element.addEventListener('keydown', eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener('keydown', eventListener);
      };
    },
    [listener, element], // Re-run if eventName or element changes
  );
}

export default useKeyboard;
