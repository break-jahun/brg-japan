import { Box } from '@mui/material';
import { FunctionComponent, ReactNode } from 'react';

interface GradingPrecessWrapperProps {
  children: ReactNode;
}

function GradingWrapper({ children }: GradingPrecessWrapperProps) {
  return (
    <Box
      padding={{
        xs: '144px 0 80px',
        sm: '184px 0 80px',
      }}
    >
      {children}
    </Box>
  );
}

export default GradingWrapper;
