import { useEffect, useState } from 'react';

const useMobileMenu = (isOpen: boolean) => {
  const [hasTransitionedIn, setHasTransitionedIn] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (isOpen && !hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(true));
    } else if (!isOpen && hasTransitionedIn) {
      timeoutId = setTimeout(() => setHasTransitionedIn(false), 300);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpen, hasTransitionedIn]);

  return {
    hasTransitionedIn,
  };
};

export default useMobileMenu;
