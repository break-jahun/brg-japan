import { useCallback, useMemo } from 'react';

function useDetectMobileDevice() {
  const mobileRegex = useMemo(() => {
    return [
      /Android/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
      /WebOS/i,
      /IEMobile/i,
      /Opera Mini/i,
    ];
  }, []);

  const detectMobileDevice = useCallback(
    (agent) => {
      return mobileRegex.some((mobile) => agent.match(mobile));
    },
    [mobileRegex]
  );

  const isMobile = detectMobileDevice(window.navigator.userAgent);

  return {
    isMobile,
  };
}

export default useDetectMobileDevice;
