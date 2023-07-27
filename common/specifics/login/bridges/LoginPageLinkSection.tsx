import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const LoginPageLinkSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={(theme) => ({
        marginTop: '16px',
        paddingY: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        textDecorationLine: 'underline',
        textDecorationColor: theme.palette.secondary_20,
        textUnderlineOffset: '2px',
        textAlign: 'center',
      })}
    >
      <Link href="/sign-up" passHref>
        <Typography color="secondary_20" variant="button">
          {t('Login-6')}
        </Typography>
      </Link>
      <Link href="/password/find" passHref>
        <Typography color="secondary_20" variant="button">
          {t('Login-7')}
        </Typography>
      </Link>
    </Box>
  );
};

export default LoginPageLinkSection;
