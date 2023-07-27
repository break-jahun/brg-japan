import { Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ShippingNotice = () => {
  const { t } = useTranslation();

  return (
    <Box p={1}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        width={1}
      >
        <Typography variant="body2" sx={{ mb: 1 }} fontWeight={700}>
          {t('orderComplete-5')}
        </Typography>
        <Typography
          variant="caption"
          textAlign="center"
          color="red"
          align="center"
          sx={{ wordBreak: 'keep-all' }}
        >
          {t('orderComplete-6')}
        </Typography>
        <Typography
          variant="caption"
          align="center"
          sx={{ wordBreak: 'keep-all' }}
        >
          {t('caution/shipping-3')}
        </Typography>
      </Box>
    </Box>
  );
};

export default ShippingNotice;
