import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SubmitDetail = ({ children }: Props) => {
  return (
    <Box
      sx={(theme) => ({
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem',
        marginTop: 5,

        [theme.breakpoints.up('sm')]: {
          gridTemplateColumns: '1fr 1fr',
        },
      })}
    >
      {children}
    </Box>
  );
};

export default SubmitDetail;
