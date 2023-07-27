import { Box, SxProps } from '@mui/material';

import { forwardRef, ReactChild, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  sx?: SxProps;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

const SecondaryButton = forwardRef(
  ({ children, onClick, sx, type }: Props, ref) => {
    return (
      <Box
        component="button"
        type={type}
        onClick={onClick}
        sx={{
          padding: {
            xs: '10px 20px',
            sm: '16px 32px',
          },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          backgroundColor: 'white',
          color: 'secondary_20',
          border: (theme) => `1px solid ${theme.palette.secondary_20}`,
          borderRadius: '28px',
          fontWeight: '500',
          ...sx,
        }}
      >
        {children}
      </Box>
    );
  }
);

export default SecondaryButton;
