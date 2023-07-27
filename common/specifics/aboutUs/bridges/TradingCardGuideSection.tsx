/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const TradingCardGuideSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        paddingX: { xs: '16px', sm: '32px' },
        backgroundColor: 'gray_100',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          paddingY: { xs: '120px', sm: '160px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '40px', sm: '80px' },
          }}
        >
          <img
            src="/images/common/brg_logo_color.png"
            width={92}
            alt="brg_logo_img"
          />
          <img
            src="/images/common/break_logo_color.png"
            width={144}
            alt="break_logo_img"
          />
        </Box>
        <Box
          sx={{
            marginTop: '80px',
            maxWidth: '740px',
          }}
        >
          <Typography textAlign="center">
            {t('트레이딩카드가이드문구')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TradingCardGuideSection;
