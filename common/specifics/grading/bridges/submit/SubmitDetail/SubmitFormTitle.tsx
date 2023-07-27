import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function SubmitFormTitle() {
  const { t } = useTranslation();

  return (
    <Typography variant="h6" align="center" fontWeight={700}>
      {t('submit-24')}
    </Typography>
  );
}

export default SubmitFormTitle;
