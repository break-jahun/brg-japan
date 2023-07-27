import { useMediaQuery, useTheme } from '@mui/material';

function useIsDesktop() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return isDesktop;
}

export default useIsDesktop;
