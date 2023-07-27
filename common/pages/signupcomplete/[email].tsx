/* eslint-disable @next/next/no-img-element */
import GoToLoginSecondaryButton from '@/common/bridges/Button/GoToLoginSecondaryButton';
import LogoBrgBreak from '@/common/components/LogoBrgBreak';
import useMemberStatusQuery from '@/common/modules/apiHooks/useMemberStatusQuery';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const SignUpCompletePage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const email = router.query.email || null;
  const isSocial = email === 'social';

  const { data } = useMemberStatusQuery(email as string, {
    enabled: !isSocial && email !== null,
  });

  const isApproved = isSocial || data?.data === 'NORMAL';

  if (!email) {
    return null;
  }

  return (
    <Box
      sx={{
        padding: { xs: '144px 0 80px', sm: '264px 0 160px' },
        display: 'flex',
        gap: '40px',
        flexDirection: 'column',
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'gray_100',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
        }}
      >
        <LogoBrgBreak />
        <Typography variant="h4" fontWeight={600}>
          {isApproved ? t('회원가입환영') : t('회원가입메일인증안내')}
        </Typography>
        {!isApproved && (
          <Typography variant="caption">{t('스팸메일함확인')}</Typography>
        )}
      </Box>
      {!isApproved && (
        <Typography variant="body1">{t('메일인증후회원가입완료')}</Typography>
      )}
      <GoToLoginSecondaryButton />
    </Box>
  );
};

export default SignUpCompletePage;
