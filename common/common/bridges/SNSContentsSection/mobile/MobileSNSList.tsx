import { Box } from '@mui/material';

function MobileSNSListContainer({ children }: { children: JSX.Element[] }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      {children}
    </Box>
  );
}

export default MobileSNSListContainer;
