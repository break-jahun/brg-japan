import useReholderOrderDetail from '@/specifics/reholder/modules/hooks/useReholderOrderDetail';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, forwardRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const OrderConfirmModal = forwardRef(() => {
  const { t } = useTranslation();
  const router = useRouter();

  const { data } = useReholderOrderDetail();

  const orderId = useMemo(() => {
    if (!router.isReady) {
      return '';
    }

    return data?.id ?? router.query?.id;
  }, [router.isReady, router.query?.id, data?.id]);

  const handleClick = () => {
    router.push('/account/orderList');
  };

  useEffect(() => {
    router.prefetch('/account/orderList');
  }, [router]);

  return (
    <Box
      p={1}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgcolor="background.paper"
    >
      <Box p={2} textAlign="center">
        <Typography variant="h6" gutterBottom fontWeight={700}>
          {t('orderComplete-10')}
        </Typography>
        <Typography
          variant="subtitle2"
          align="center"
          gutterBottom
          sx={{
            wordBreak: 'keep-all',
          }}
        >
          {t('grading/order/complete/order-number-is')}
          <Typography
            component="span"
            color="red"
            fontWeight={700}
            style={{ color: 'red' }}
            mx={0.5}
          >
            {orderId}
          </Typography>
          {t('grading/order/complete/be')}
          <br />
          {t('orderComplete-12')}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            m: 1,
            boxShadow: 'unset',
          }}
          onClick={handleClick}
        >
          {t('orderList-7')}
        </Button>
      </Box>
    </Box>
  );
});

export default OrderConfirmModal;
