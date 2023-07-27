import { Box } from '@mui/material';

interface ContainerProps {
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <Box overflow="hidden" paddingTop="48px">
      {children}
    </Box>
  );
}

export default Container;
