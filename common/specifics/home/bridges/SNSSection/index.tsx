import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';
import { useTranslation } from 'react-i18next';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';
import TwitterContents from './TwitterContents';
import SNSButtonGroup from './SNSButtonGroup';

const SNSSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: 'secondary_10',
        padding: { xs: '64px 0', sm: '160px 0' },
      }}
    >
      <MaxWidthLayoutBox sx={{ paddingX: '32px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <StyledImg src="/images/common/brg_logo_white.png" />
          <ResponsiveFamilyTypography
            variant={isMobile ? 'h5' : 'h3'}
            color="white"
            fontWeight={600}
          >
            {t('소셜미디어')}
          </ResponsiveFamilyTypography>
        </Box>
        {/* 트위터 추후 연동
        <TwitterContents /> */}
        <SNSButtonGroup />
      </MaxWidthLayoutBox>
    </Box>
  );
};

export default SNSSection;

const StyledImg = styled('img')(({ theme }) => ({
  width: '64px',
  [theme.breakpoints.up('sm')]: {
    width: '144px',
  },
}));
