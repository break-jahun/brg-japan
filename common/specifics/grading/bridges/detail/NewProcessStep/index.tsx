import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionLayout from '@/common/components/Layout/SectionLayout';
import NewProcessDetailButton from '@/specifics/grading/bridges/detail/ProcessDetail/NewProcessDetailButton';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';
import NewProcessStepSlider from '@/specifics/grading/bridges/detail/NewProcessStep/NewProcessStepSlider';
import NewProcessDetail from '@/specifics/grading/bridges/detail/NewProcessStep/NewProcessDetail';

function NewProcessStep() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isProcessDetailOpen, setIsProcessDetailOpen] = useState(false);

  const onToggleProcessDetailClick = useCallback(() => {
    setIsProcessDetailOpen((prev) => !prev);
  }, []);

  return (
    <SectionLayout sx={{ paddingTop: '80px' }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box
          width={{ xs: '100%', sm: '704px' }}
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'unset', sm: 'center' }}
          gap={{ xs: '64px', sm: '48px' }}
          margin={{ xs: 0, sm: '0 auto' }}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ xs: 'center', sm: 'flex-start' }}
            minWidth={{ xs: 0, sm: '328px' }}
            width="328px"
            margin="0 auto"
          >
            <ResponsiveFamilyTypography
              align={isMobile ? 'center' : 'left'}
              variant={isMobile ? 'h4' : 'h3'}
              color="secondary_20"
              fontWeight={600}
            >
              {t('detail-3')}
            </ResponsiveFamilyTypography>
            <Typography
              align={isMobile ? 'center' : 'left'}
              marginTop="16px"
              whiteSpace={{ xs: 'normal', sm: 'break-spaces' }}
            >
              {t('detail-4')}
            </Typography>
          </Box>
          <NewProcessStepSlider />
        </Box>
        <NewProcessDetailButton
          isOpen={isProcessDetailOpen}
          handleToggleProcessDetailClick={onToggleProcessDetailClick}
        />
      </Box>
      {isProcessDetailOpen && <NewProcessDetail />}
    </SectionLayout>
  );
}

export default NewProcessStep;
