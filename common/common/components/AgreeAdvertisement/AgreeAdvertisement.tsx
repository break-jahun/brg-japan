import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function AgreeAdvertisement() {
  const { t } = useTranslation();

  return (
    <Container
      maxWidth="sm"
      sx={{
        paddingTop: { xs: '64px', sm: '104px' },
      }}
    >
      <Typography variant="h6" fontWeight={700} py={1}>
        {t('terms-6')}
      </Typography>
      <Box my={3}>
        <Typography
          variant="body1"
          paragraph
          sx={{ wordBreak: 'keep-all' }}
          color="grey.700"
        >
          {t('terms-7')}
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ wordBreak: 'keep-all' }}
          color="grey.700"
        >
          {t('terms-8')}
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ wordBreak: 'keep-all' }}
          color="grey.700"
        >
          {t('terms-9')}
        </Typography>
      </Box>
    </Container>
  );
}

export default AgreeAdvertisement;
