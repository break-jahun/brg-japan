/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const NewTradingCardGuideSection = () => {
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
          paddingY: '80px',
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
            marginTop: '40px',
            maxWidth: '704px',
          }}
        >
          <Typography
            textAlign="center"
            whiteSpace="break-spaces"
            variant="body1"
          >
            {t('about-2')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NewTradingCardGuideSection;
