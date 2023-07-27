import { GNBLayout } from '@/common/bridges/Layout';
import { VStack } from '@/common/components/VStack';
import { HStack } from '@/common/components/HStack';
import {
  Box,
  Theme,
  Typography,
  styled,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { welcomeText, footerCompanyText } = useHomepageParser();

  return (
    <GNBLayout>
      <HomeRoot>
        <VStack color="white">
          <LogoText>break</LogoText>
          <Typography />
          <Box>
            <Typography variant={isMobile ? 'h6' : 'h5'} letterSpacing={0.5}>
              TRADING CARD SERVICE PLATFORM
            </Typography>
          </Box>
          <Box marginBottom="34px">
            <Typography variant={isMobile ? 'body2' : 'h5'} letterSpacing={0.5}>
              {welcomeText}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            gap={{ xs: '25px', sm: '80px' }}
          >
            <Box
              display="flex"
              flexDirection={{ xs: 'row', sm: 'column' }}
              gap="12px"
            >
              <Box>
                <HomeServiceName variant={isMobile ? 'h6' : 'h3'}>
                  GRADING
                </HomeServiceName>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  src="/images/brg_logo_w.png"
                  alt="logo"
                  width={40}
                  height={22.5}
                />
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: 'row', sm: 'column' }}
              gap="12px"
            >
              <Box>
                <HomeServiceName variant={isMobile ? 'h6' : 'h3'}>
                  COLLECTION
                </HomeServiceName>
              </Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <CommingSoon>comming soon</CommingSoon>
              </Box>
            </Box>
          </Box>
        </VStack>
        <Box
          position="absolute"
          bottom="5px"
          marginLeft={{ xs: '-5px', sm: '-32px' }}
        >
          <Company color="white">{footerCompanyText}</Company>
        </Box>
      </HomeRoot>
    </GNBLayout>
  );
}

function useHomepageParser() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const welcomeText = isMobile
    ? t('home/banner/welcome-2')
    : t('home/banner/welcome-1');

  const footerCompanyText = isMobile
    ? '© Break & Company 2022.'
    : `${t('footer/company-name')} | © Break & Company 2022.`;

  return {
    welcomeText,
    footerCompanyText,
  };
}

const LogoText = styled(Typography)(({ theme }) => ({
  fontSize: '5rem',
  fontFamily: 'Do Hyeon',
  fontWeight: 500,
  lineHeight: 1.1,
  marginBottom: 10,
  letterSpacing: 5,
  [theme.breakpoints.up('sm')]: {
    fontSize: '9rem',
  },
}));
const HomeServiceName = styled(Typography)({
  fontWeight: 900,
  letterSpacing: 0.5,
});
const CommingSoon = styled(Box)(({ theme }) => ({
  fontSize: '11px',
  fontWeight: 900,
  color: theme.palette.comming_soon,
}));
const Company = styled(Box)({
  fontSize: '9px',
  fontWeight: 900,
  letterSpacing: '0.5px',
});
const HomeRoot = styled(Box)(({ theme }) => ({
  minHeight: 'calc(100vh - 64px)', // 헤더의 높이만큼 빼주었습니다.
  padding: '20vh 0px 0px 24px',

  [theme.breakpoints.up('sm')]: {
    padding: '20vh 72px',
  },
}));
const Image = styled('img')({
  width: 40,
  height: 22.5,
});

export default HomePage;
