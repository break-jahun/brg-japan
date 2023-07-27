import { styled } from '@mui/material';

export const FormSecondaryButton = styled('button')(({ theme }) => ({
  padding: '14px 28px',
  background: theme.palette.secondary_20,
  boxShadow:
    '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
  borderRadius: '28px',
  color: 'white',
  width: '100%',
}));

export const FormWhiteButton = styled('button')(({ theme }) => ({
  padding: '12px 0',
  background: 'white',
  boxShadow:
    '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
  borderRadius: '24px',
  width: '100%',
}));
