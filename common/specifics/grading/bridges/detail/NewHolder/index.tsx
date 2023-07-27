import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';
import HolderCardList from '@/specifics/grading/bridges/detail/NewHolder/HolderCardList';

function NewHolder() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: 'secondary_10',
        position: 'relative',
        backgroundImage: `url('/images/gradingIntroDetail/holder_background.png')`,
        backgroundSize: '484px 448px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top 64px',
        paddingY: '80px',
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          width={{ xs: '100%', sm: '704px' }}
          padding={{ xs: '0px 16px', sm: '0px 32px' }}
          margin={{ xs: 0, sm: '0 auto' }}
        >
          <ResponsiveFamilyTypography
            color="white"
            align="center"
            variant="h4"
            fontWeight={600}
          >
            {t('detail-20')}
          </ResponsiveFamilyTypography>
          <Typography
            color="white"
            variant="body1"
            marginTop="16px"
            align="center"
            whiteSpace="break-spaces"
            marginBottom="40px"
            sx={{ wordBreak: 'keep-all' }}
          >
            {t('detail-21')}
          </Typography>
        </Box>
        <HolderCardList />
      </Box>
    </Box>
  );
}

export default NewHolder;
