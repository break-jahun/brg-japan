import { VStack } from '@/common/components/VStack';
import { useTranslation } from 'react-i18next';
import { Typography, styled } from '@mui/material';

const SubmitTitle = () => {
  const { t } = useTranslation();

  return (
    <VStack>
      <Typography sx={{ fontWeight: 900, textAlign: 'center' }} variant="h6">
        GRADING SUBMIT
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: '#646464', textAlign: 'center' }}
      >
        {t('submit-20')}
      </Typography>
    </VStack>
  );
};

export default SubmitTitle;
