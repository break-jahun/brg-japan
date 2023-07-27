import { Box, Button, styled } from '@mui/material';
import { GNBLayout } from '@/common/bridges/Layout';
import InstaSection from '@/specifics/community/bridges/instagram/InstaSection';

function CommunityPage() {
  return (
    <GNBLayout>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        padding={{ xs: '52px 0 52px 0', sm: '90px 0 90px 0' }}
        bgcolor="#fafafa"
      >
        <InstaSection />
      </Box>
    </GNBLayout>
  );
}

const TestBtn = styled(Button)(() => ({
  position: 'fixed',
  top: '70px',
}));

export default CommunityPage;
