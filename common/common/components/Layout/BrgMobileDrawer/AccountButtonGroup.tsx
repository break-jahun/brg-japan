import useCheckLoginQuery from '@/common/modules/hooks/useCheckLoginQuery';
import { Box, styled, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const AccountButtonGroup = ({ handleClose }: { handleClose: () => void }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { data: isLoggedIn } = useCheckLoginQuery();
  const isAccountPage = router.pathname.startsWith('/account');

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '24px' }}>
      {isLoggedIn ? (
        <>
          <Link href="/logout" passHref>
            <TransparentButton onClick={handleClose}>
              <Typography variant="button">{t('로그아웃')}</Typography>
            </TransparentButton>
          </Link>
          {!isAccountPage && (
            <Link href="/account/dashboard" passHref>
              <SecondaryButton onClick={handleClose}>
                <Typography variant="button">{t('마이페이지')}</Typography>
              </SecondaryButton>
            </Link>
          )}
        </>
      ) : (
        <>
          <Link href="/sign-up" passHref>
            <TransparentButton onClick={handleClose}>
              <Typography variant="button">{t('회원가입')}</Typography>
            </TransparentButton>
          </Link>
          <Link href="/login" passHref>
            <SecondaryButton onClick={handleClose}>
              <Typography variant="button">{t('로그인')}</Typography>
            </SecondaryButton>
          </Link>
        </>
      )}
    </Box>
  );
};

export default AccountButtonGroup;

const TransparentButton = styled('button')(({ theme }) => ({
  border: `1px solid ${theme.palette.secondary_20}`,
  padding: '8px 16px',
  color: theme.palette.secondary_20,
  borderRadius: '28px',
  flexBasis: '50%',
}));

const SecondaryButton = styled('button')(({ theme }) => ({
  color: 'white',
  backgroundColor: theme.palette.secondary_20,
  borderRadius: '28px',
  padding: '8px 16px',
  flexBasis: '50%',
}));
