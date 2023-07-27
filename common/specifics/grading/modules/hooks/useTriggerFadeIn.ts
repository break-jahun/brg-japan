import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

function useTriggerFadeIn(
  target: React.MutableRefObject<HTMLDivElement | null>
) {
  const [isFade, setIsFade] = useState(false);

  const observerOptions: IntersectionObserverInit = useMemo(
    () => ({
      threshold: 0,
    }),
    []
  );

  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsFade(true);
          observer.unobserve(entry.target);
        }
      });
    },
    []
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target.current) {
      observer = new IntersectionObserver(observerCallback, observerOptions);
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, observerCallback, observerOptions]);

  return isFade;
}

export default useTriggerFadeIn;
