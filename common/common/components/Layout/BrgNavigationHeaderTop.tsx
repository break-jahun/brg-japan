import LanguageSelect from '@/common/components/Layout/LanguageSelect';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import useCheckLoginQuery from '@/common/modules/hooks/useCheckLoginQuery';
import { Box, Color, styled, Typography } from '@mui/material';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import * as gtag from '@/common/utils/ga';
import { useRouter } from 'next/router';

const BrgNavigationHeaderTop = ({
  isHovering = false,
}: {
  isHovering?: boolean;
}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const { data: isLoggedIn, isLoading } = useCheckLoginQuery();

  const handleClickSubmit = () => {
    gtag.clickSubmit(router.pathname);
  };

  return (
    <Box
      sx={{
        backgroundColor: isHovering ? 'gray_100' : 'white',
      }}
    >
      <MaxWidthLayoutBox
        sx={{
          padding: '4px 32px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {!isLoading && (
          <Box sx={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link href="/grading" passHref>
              <StyledButton onClick={handleClickSubmit}>
                <Typography variant="button" fontWeight={500}>
                  {t('신청하기')}
                </Typography>
              </StyledButton>
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/account/dashboard" passHref>
                  <Typography>마이페이지</Typography>
                </Link>
                <Link href="/logout" passHref>
                  <Typography>로그아웃</Typography>
                </Link>
              </>
            ) : (
              <>
                <Link href="/login" passHref>
                  <Typography>로그인</Typography>
                </Link>
                <Link href="/sign-up" passHref>
                  <Typography>회원가입</Typography>
                </Link>
              </>
            )}
          </Box>
        )}
      </MaxWidthLayoutBox>
    </Box>
  );
};

export default BrgNavigationHeaderTop;

const StyledButton = styled('button')(({ theme }) => ({
  padding: '6px 12px',
  borderRadius: '28px',
  backgroundColor: theme.palette.secondary_20,
  color: 'white',
}));
