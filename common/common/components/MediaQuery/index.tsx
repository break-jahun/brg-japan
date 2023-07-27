import { Box, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface MediaQueryProps {
  isMobile?: boolean;
  children: ReactNode;
}

function MediaQuery({ isMobile = false, children }: MediaQueryProps) {
  const theme = useTheme();
  const isUpSm = useMediaQuery(theme.breakpoints.up('sm'));

  if (!isMobile) {
    return isUpSm ? <Box>{children}</Box> : null;
  }
  return isUpSm ? null : <Box>{children}</Box>;
}

export default MediaQuery;
