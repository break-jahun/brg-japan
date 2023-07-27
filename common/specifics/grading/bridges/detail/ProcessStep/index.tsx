import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionLayout from '@/common/components/Layout/SectionLayout';
import ProcessDetail from '@/specifics/grading/bridges/detail/ProcessDetail';
import ProcessDetailButton from '@/specifics/grading/bridges/detail/ProcessDetail/ProcessDetailButton';
import ProcessStepSlider from '@/specifics/grading/bridges/detail/ProcessStep/ProcessStepSlider';
import ResponsiveFamilyTypography from '@/common/components/Typography/ResponsiveFamilyTypography';

function ProcessStep() {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isProcessDetailOpen, setIsProcessDetailOpen] = useState(false);

  const onToggleProcessDetailClick = useCallback(() => {
    setIsProcessDetailOpen((prev) => !prev);
  }, []);

  return (
    <>
      <SectionLayout sx={{ paddingTop: '80px' }}>
        <Box display="flex" flexDirection="column">
          <Box
            width={{ xs: '100%', sm: '704px' }}
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'unset', sm: 'center' }}
            rowGap={{ xs: '40px', sm: 0 }}
            columnGap={{ xs: 0, sm: '88px' }}
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
                {t('그레이딩프로세스')}
              </ResponsiveFamilyTypography>
              <Typography align={isMobile ? 'center' : 'left'} marginTop="16px">
                {t('그레이딩프로세스설명')}
              </Typography>
            </Box>
            <ProcessStepSlider />
          </Box>

          <ProcessDetailButton
            isOpen={isProcessDetailOpen}
            handleToggleProcessDetailClick={onToggleProcessDetailClick}
          />
        </Box>
      </SectionLayout>
      {isProcessDetailOpen && <ProcessDetail />}
      <Box width={1} height="64px" />
    </>
  );
}

export default ProcessStep;
