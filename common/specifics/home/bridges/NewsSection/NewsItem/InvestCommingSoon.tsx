import { Box, Typography } from '@mui/material';
import NewsItemLayout from '@/specifics/home/bridges/NewsSection/NewsItem/NewsItemLayout';

const InvestCommingSoon = () => {
  return (
    <NewsItemLayout>
      <Box
        sx={{
          height: { xs: '608px', sm: '388px' },
          px: '16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            color: 'gray_400',
            fontSize: '48px',
          }}
        >
          Investment news coming soon
        </Typography>
      </Box>
    </NewsItemLayout>
  );
};

export default InvestCommingSoon;
