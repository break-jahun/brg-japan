import { Box } from '@mui/material';

interface SNSFeedLayoutProps {
  children: React.ReactNode;
}

function SNSFeedLayout({ children }: SNSFeedLayoutProps) {
  return (
    <Box
      maxWidth="440px"
      width={1}
      height={{ xs: '328px', sm: '338px' }}
      bgcolor="#000"
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      {children}
    </Box>
  );
}

export default SNSFeedLayout;
