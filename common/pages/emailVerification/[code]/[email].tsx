/* eslint-disable @next/next/no-img-element */
import GoToLoginSecondaryButton from '@/common/bridges/Button/GoToLoginSecondaryButton';
import useEmailVerificationMutation from '@/common/modules/apiHooks/useEmailVerificationMutation';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LogoBrgBreak from '@/common/components/LogoBrgBreak';
import { VStack } from '@/common/components/VStack';

const EmailVerificationPage = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const code = (router.query.code as string) || null;
  const email = (router.query.email as string) || null;

  const { mutate } = useEmailVerificationMutation();

  useEffect(() => {
    if (router.isReady) {
      if (!code || !email) {
        router.push('/');
        return;
      }

      mutate({ code, email });
    }
  }, [router, code, email, mutate]);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '184px 0 120px', sm: '264px 0 160px' },
        gap: { xs: '80px', sm: '40px' },
        backgroundColor: 'gray_100',
      }}
    >
      <LogoBrgBreak />
      <VStack sx={{ gap: '8px', textAlign: 'center' }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{ wordBreak: 'keep-all' }}
        >
          {t('이메일인증')}
        </Typography>
        <Typography variant="body1" color="gray_700">
          {t('회원가입완료')}
        </Typography>
      </VStack>
    </Box>
  );
};

export default EmailVerificationPage;
