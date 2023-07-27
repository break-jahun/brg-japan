import { Box, Divider } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SummaryTableLayout = ({ children }: Props) => {
  return (
    <>
      <Box p={1}>{children}</Box>
      <Divider />
    </>
  );
};

export default SummaryTableLayout;
