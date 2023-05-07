import { useCallback, useEffect } from 'react';

export function useEscapeKey(callback: () => void) {
  const handleEscape = useCallback(
    (e: any) => {
      if (e.key === 'Escape') {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);
}
