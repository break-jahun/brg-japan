import HomeSectionTitle from '@/specifics/home/components/HomeSectionTitle';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';

function SNSContentsSectionContainer({
  desktopItem,
  mobileItem,
}: {
  desktopItem: JSX.Element;
  mobileItem: JSX.Element;
}) {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box width={1} bgcolor="gray_100">
      <MaxWidthLayoutBox>
        <Box
          width={1}
          margin="0 auto"
          maxWidth="768px"
          display="flex"
          flexDirection={{ xs: 'column', sm: 'column' }}
          justifyContent="space-between"
          padding={{ xs: '80px 16px', sm: '80px 32px' }}
        >
          <HomeSectionTitle title={t('SNS')} sx={{ flexWrap: 'wrap' }} />
          {isMobile ? mobileItem : desktopItem}
        </Box>
      </MaxWidthLayoutBox>
    </Box>
  );
}

export default SNSContentsSectionContainer;
