import { useTranslation } from 'react-i18next';
import { Typography, useTheme, useMediaQuery } from '@mui/material';
import { VStack } from '@/common/components/VStack';
import SectionTitle from '@/specifics/grading/components/SectionTitle';

function TheMappingSection() {
  const { t } = useTranslation();

  return (
    <VStack
      width={1}
      height={{ xs: '200px', sm: '300px' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <SectionTitle sx={{ wordBreak: 'keep-all' }}>THE MAPPING</SectionTitle>
      <Typography
        variant="body1"
        align="center"
        sx={{
          wordBreak: 'keep-all',
          whiteSpace: 'pre-wrap',
          padding: ['0px 16px', 0],
        }}
      >
        {t('grading/main/brg-section-text-05')}
      </Typography>
    </VStack>
  );
}

export default TheMappingSection;
