import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import RefundAccountForm from './RefundAccountForm';

const RefundAccounSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        padding: 2,
        mb: 3,
        borderRadius: 0.5,
        backgroundColor: '#eeeeee',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mb: 2,
          justifyContent: 'center',
          flexDirection: ['row', 'column'],
        }}
      >
        <Typography
          align="center"
          sx={{
            whiteSpace: ['pre-wrap', 'unset'],
          }}
        >
          {t('grading/payment-method/refund-account-alert')}
          <Typography color="red" component="span">
            ({t('required')})
          </Typography>
        </Typography>
      </Box>
      <RefundAccountForm />
    </Box>
  );
};

export default RefundAccounSection;
