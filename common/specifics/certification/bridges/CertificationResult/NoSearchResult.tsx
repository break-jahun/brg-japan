import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const NoSearchResult = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        marginTop: '64px',
      }}
    >
      <Typography variant="h4" fontWeight={600}>
        {t('certification-8')}
      </Typography>
      <Typography variant="body1">{t('certification-9')}</Typography>
    </Box>
  );
};

export default NoSearchResult;
