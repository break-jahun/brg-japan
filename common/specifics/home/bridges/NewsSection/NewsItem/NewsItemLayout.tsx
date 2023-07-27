import { Box } from '@mui/material';
import { ReactChild } from 'react';

interface Props {
  children: ReactChild;
}

const NewsItemLayout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        boxShadow:
          '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);',
      }}
    >
      <Box
        sx={{
          height: { xs: '40px', sm: '60px' },
          backgroundColor: '#0D1E3D',
        }}
      />
      {children}
    </Box>
  );
};

export default NewsItemLayout;
