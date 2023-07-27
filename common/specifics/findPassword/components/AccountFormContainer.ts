import { Box, styled } from '@mui/material';

const AccountFormContainer = styled(Box)(({ theme }) => ({
  padding: '144px 0 80px',
  maxWidth: '328px',
  margin: '0 auto',
  backgroundColor: theme.palette.gray_100,

  [theme.breakpoints.up('sm')]: {
    padding: '264px 0 160px',
    maxWidth: 'unset',
  },
}));

export default AccountFormContainer;
