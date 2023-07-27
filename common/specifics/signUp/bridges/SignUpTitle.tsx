import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const SignUpTitle = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Typography
      variant={isMobile ? 'h4' : 'h3'}
      fontWeight={600}
      align="center"
    >
      {t('signup-1')}
    </Typography>
  );
};

export default SignUpTitle;
