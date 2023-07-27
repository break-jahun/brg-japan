import ArrowBackIosNewRounded from '@mui/icons-material/ArrowBackIosNewRounded';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const GoToLoginSecondaryButton = () => {
  const { t } = useTranslation();

  return (
    <Link href="/login" passHref>
      <Box
        component="button"
        sx={{
          paddingY: '12px',
          backgroundColor: 'secondary_20',
          borderRadius: '40px',
          color: 'white',
          width: '169px',
          display: 'flex',
          gap: '8px',
        }}
      >
        <ArrowBackIosNewRounded />
        <Typography variant="button">{t('로그인하러가기')}</Typography>
      </Box>
    </Link>
  );
};

export default GoToLoginSecondaryButton;
