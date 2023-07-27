import { Box, styled } from '@mui/material';

const SliderProgressBar = styled(Box)(({ theme }) => ({
  height: '4px',
  display: 'flex',
  borderRadius: '4px',
  backgroundColor: theme.palette.gray_400,

  [theme.breakpoints.up('sm')]: {
    height: '8px',
  },
}));

export default SliderProgressBar;
