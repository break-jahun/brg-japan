import { Box, styled } from '@mui/material';

const ShadowStyledBox = styled(Box)(({ theme }) => ({
  border: '1px solid rgba( 255, 255, 255, 0.05 )',
  background: 'rgba( 255, 255, 255, 0.30 )',
  boxShadow: '0 8px 24px 0 rgb(31 38 135 / 37%)',
  borderRadius: 10,
  backdropFilter: 'blur( 3.0px )',
  padding: 20,
  [theme.breakpoints.up('sm')]: {
    padding: 20,
  },
}));

export default ShadowStyledBox;
