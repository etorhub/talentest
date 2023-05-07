import { useEffect } from 'react';

export const useEscapeKey = (callback: () => void) => {
  const handleEscape = (e: any) => {
    if (e.key === 'Escape') {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);
};
