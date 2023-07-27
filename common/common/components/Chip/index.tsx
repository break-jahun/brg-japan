import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface BrgChipProps {
  children: ReactNode;
}

const BrgChip = ({ children, ...rest }: BrgChipProps) => {
  return (
    <Box
      sx={(theme) => ({
        border: `1px solid ${theme.palette.secondary_20}`,
        borderRadius: '16px',
        padding: '4px 8px',
        width: 'max-content',
      })}
      {...rest}
    >
      {children}
    </Box>
  );
};

export { BrgChip as Chip };
