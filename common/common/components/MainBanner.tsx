import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  keyframes,
} from '@mui/material';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import { useTranslation } from 'react-i18next';

interface MainBannerProps {
  title: any;
  subTitle?: any;
}

function MainBanner({ title, subTitle }: MainBannerProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      alignItems="flex-end"
      marginTop={{ sm: '40px' }}
      width={1}
      minHeight="400px"
      paddingTop="64px"
      sx={{
        backgroundColor: 'secondary_20',
      }}
    >
      <MaxWidthLayoutBox
        width={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        rowGap={{ xs: '24px', sm: '16px' }}
        padding={{ xs: '80px 16px', sm: '104px 32px' }}
      >
        <Box
          display="flex"
          alignItems="center"
          columnGap={{ xs: '8px', sm: '16px' }}
        >
          {title === '피드' && (
            <img
              width="92px"
              height="40px"
              src="/images/common/brg_logo_white.png"
              alt="logo"
            />
          )}

          <Typography
            color="white"
            variant={isMobile ? 'h3' : 'h2'}
            fontWeight={600}
            align="center"
          >
            {t(title)}
          </Typography>
        </Box>
        {/* 파트너샵의 경우 subTitle이 없지만 텍스트 공간은 잡혀져있어야 디자인 상 레이아웃이랑 사이즈가 맞아서 &&연산자를 내부에 사용 */}
        <Typography
          color="white"
          variant="subtitle1"
          sx={{ textAlign: { xs: 'center', sm: 'start' } }}
        >
          {subTitle && t(subTitle)}
        </Typography>
      </MaxWidthLayoutBox>
    </Box>
  );
}

export default MainBanner;
