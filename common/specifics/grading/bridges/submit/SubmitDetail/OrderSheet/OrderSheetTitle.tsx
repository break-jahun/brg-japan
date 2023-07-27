import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const OrderSheetTitle = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        gridArea: 'title',
      }}
    >
      <Typography variant="h6" textAlign="center" fontWeight="700">
        {t('submit-67')}
      </Typography>
    </Box>
  );
};

export default OrderSheetTitle;
