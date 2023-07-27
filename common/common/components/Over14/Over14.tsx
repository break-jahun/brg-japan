import { Box, Container, Divider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Over14() {
  const { t } = useTranslation();
  return (
    <Container
      maxWidth="sm"
      sx={{
        paddingTop: { xs: '64px', sm: '104px' },
      }}
    >
      <Box py={1}>
        <Typography variant="h4" fontWeight={700}>
          {t('terms-1')}
        </Typography>
      </Box>
      <Divider />
      <Box my={3}>
        <Typography variant="body2" paragraph sx={{ wordBreak: 'keep-all' }}>
          ■ {t('terms-2')}
        </Typography>
        <Typography variant="body2" paragraph sx={{ wordBreak: 'keep-all' }}>
          ■ {t('terms-3')}
        </Typography>
      </Box>
    </Container>
  );
}

export default Over14;
