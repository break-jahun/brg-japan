import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import HostedEventSliderSection from '@/common/bridges/HostedEvent/HostedEventSliderSection';
import HomeSectionTitle from '@/specifics/home/components/HomeSectionTitle';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';

function HostedEventHistory() {
  const { t } = useTranslation();

  return (
    <MaxWidthLayoutBox>
      <Box
        margin="0 auto"
        width={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        paddingY={{ xs: '80px', sm: '80px' }}
        sx={{ maxWidth: { xs: '100%', sm: '768px' } }}
      >
        <Box paddingX={{ xs: '16px', sm: '32px' }}>
          <HomeSectionTitle title={t('Home-history-1')} />
        </Box>
        <HostedEventSliderSection />
      </Box>
    </MaxWidthLayoutBox>
  );
}

export default HostedEventHistory;
