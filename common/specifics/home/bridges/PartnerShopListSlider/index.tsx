import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import SecondaryButton from '@/common/components/Button/SecondaryButton';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';
import PartnerShopSlider from './PartnerShopSlider';

const PartnerShopListSlider = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        padding: { xs: '64px 0 66px', sm: '160px 0' },
      }}
    >
      <MaxWidthLayoutBox
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            marginBottom: '8px',
          }}
        >
          <ResponsiveFamilyTypography
            color="secondary_20"
            variant={isMobile ? 'h4' : 'h3'}
            fontWeight={600}
          >
            {t('파트너샵 목록')}
          </ResponsiveFamilyTypography>
        </Box>
        <Typography
          sx={{
            color: 'gray_600',
            fontSize: {
              xs: '12px',
              sm: '16px',
            },
          }}
        >
          {t('파트너샵알아보기')}
        </Typography>
        <PartnerShopSlider />
        <Link href="/partner-shop" passHref>
          <SecondaryButton>{t('brg파트너샵')}</SecondaryButton>
        </Link>
      </MaxWidthLayoutBox>
    </Box>
  );
};

export default PartnerShopListSlider;
