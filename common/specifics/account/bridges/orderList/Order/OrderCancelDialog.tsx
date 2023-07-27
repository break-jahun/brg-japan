import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import Close from '@mui/icons-material/Close';
import {
  ServiceOrderDetailProps,
  ServiceType,
} from '@/common/types/serviceOrder/serviceOrder';
import {
  usePaymentCancelMutation,
  useReholderPaymentCancelMutation,
} from '@/specifics/account/modules/api/payment';

import * as Sentry from '@sentry/react';
import { useMemo } from 'react';
import { AxiosError } from 'axios';
import { PaymentCancel } from '@/specifics/grading/modules/api/tossPayments';

interface OrderCancelDialogProps {
  isOpenCancelOrder: boolean;
  handleCloseCancelOrder: () => void;
  order: ServiceOrderDetailProps;
  serviceType: ServiceType;
  refetch: () => void;
}

const useOrderCancelDialogParser = (
  serviceType: ServiceType,
  order: ServiceOrderDetailProps,
  closeAndRefetch: () => void
) => {
  const { t } = useTranslation();
  const { mutate: mutateGradingCancel, isLoading: isLoadingGrading } =
    usePaymentCancelMutation();
  const { mutate: mutateReholderCancel, isLoading: isLoadingReholder } =
    useReholderPaymentCancelMutation();
  const isLoading = useMemo(
    () => isLoadingGrading || isLoadingReholder,
    [isLoadingGrading, isLoadingReholder]
  );
  const proceedCancel = () => {
    function handleOnSuccess(data: PaymentCancel) {
      const isSuccess = data.data;
      if (isSuccess) {
        closeAndRefetch();
        alert(t('general/cancel-complet'));
      } else {
        alert(t('general/cancel-fail'));
      }
    }
    function handleOnError(error: AxiosError) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      const { code } = error?.response?.data;

      // paymentKey가 올바르지 않은 경우
      if (code === 108013) {
        alert(t('general/cancel-fail'));
        return;
      }
      // TODO: 에러 메세지 추가 번역 필요
      if (code === 'INVALID_REFUND_ACCOUNT_NUMBER') {
        alert('잘못된 환불 계좌번호입니다.');

        closeAndRefetch();
        return;
      }
      if (code === 'INVALID_REFUND_ACCOUNT_INFO') {
        alert('환불 계좌번호와 예금주명이 일치하지 않습니다.');

        closeAndRefetch();
        return;
      }
      if (code === 'INVALID_BANK') {
        alert('유효하지 않은 은행입니다.');

        closeAndRefetch();
        return;
      }
      if (code === 'ALREADY_CANCELED_PAYMENT') {
        alert('이미 취소된 결제 입니다.');
        return;
      }
      if (code === 'NOT_ALLOWED_PARTIAL_REFUND') {
        alert(
          '에스크로 주문, 현금 카드 결제 등의 사유로 부분 환불이 불가합니다.'
        );
        return;
      }
      if (code === 'FORBIDDEN_REQUEST') {
        alert('허용되지 않은 요청입니다.');
        return;
      }
      if (code === 'NOT_CANCELABLE_PAYMENT') {
        alert('취소 할 수 없는 결제 입니다.');
        return;
      }
      if (code === 'NOT_FOUND_PAYMENT') {
        alert('존재하지 않는 결제 정보 입니다.');
        return;
      }
      if (code === 'FAILED_METHOD_HANDLING_CANCEL') {
        alert(
          '취소 중 결제 시 사용한 결제 수단 처리과정에서 일시적인 오류가 발생했습니다.'
        );
        return;
      }
      if (code === 'FAILED_REFUND_PROCESS') {
        alert(
          '은행 응답시간 지연이나 일시적인 오류로 환불요청에 실패했습니다.'
        );
        return;
      }

      alert(t('general/cancel-fail'));
      Sentry.captureException(error);
    }
    if (serviceType === 'GRADING') {
      mutateGradingCancel(
        {
          paymentKey: order?.payment?.payment_uid ?? '',
          merchant_uid: order?.merchant_uid ?? '',
        },
        {
          onSuccess: (data) => {
            handleOnSuccess(data);
          },
          onError: (error) => {
            handleOnError(error);
          },
        }
      );
    } else if (serviceType === 'REHOLDER') {
      mutateReholderCancel(
        {
          paymentKey: order?.payment?.payment_uid ?? '',
        },
        {
          onSuccess: (data) => {
            handleOnSuccess(data);
          },
          onError: (error) => {
            handleOnError(error);
          },
        }
      );
    }
  };
  return {
    isLoading,
    proceedCancel,
  };
};
function OrderCancelDialog({
  isOpenCancelOrder,
  handleCloseCancelOrder,
  order,
  serviceType,
  refetch,
}: OrderCancelDialogProps) {
  const closeAndRefetch = () => {
    refetch();
    handleCloseCancelOrder();
  };
  const { isLoading, proceedCancel } = useOrderCancelDialogParser(
    serviceType,
    order,
    closeAndRefetch
  );
  const { t } = useTranslation();
  return (
    <Dialog open={isOpenCancelOrder} maxWidth="xs">
      <DialogTitle>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <b>{t('general/order-cancel')}</b>
          <IconButton aria-label="close" onClick={handleCloseCancelOrder}>
            <Close />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Box display="flex" justifyContent="center">
          <Box my={1}>
            <Divider />
            <Box py={1} display="flex" justifyContent="center">
              <Typography variant="caption">
                <b>{t('general/question-order-cancel')}</b>
              </Typography>
            </Box>
            <Divider />
            <Box py={1}>
              <Box display="flex" justifyContent="space-between">
                <Typography gutterBottom>
                  <b>{t('general/order-price')}</b>
                </Typography>
                <Typography gutterBottom>
                  {`${order.totalPrice?.toLocaleString()}${t('general/won')}`}
                </Typography>
              </Box>
              {(order.discountPrice ?? 0) > 0 && (
                <Box display="flex" justifyContent="space-between">
                  <Typography gutterBottom color="#FF3030">
                    <b>{t('할인금액')}</b>
                  </Typography>
                  <Typography gutterBottom>
                    {`${order.discountPrice?.toLocaleString()}${t(
                      'general/won'
                    )}`}
                  </Typography>
                </Box>
              )}

              <Box display="flex" justifyContent="space-between">
                <Typography gutterBottom>
                  <b>{t('general/delivery-charge')}</b>
                </Typography>
                <Typography
                  gutterBottom
                >{`${order.deliveryCost?.toLocaleString()}${t(
                  'general/won'
                )}`}</Typography>
              </Box>
              {(order.deliveryDiscountAmount ?? 0) > 0 && (
                <Box display="flex" justifyContent="space-between">
                  <Typography gutterBottom color="#FF3030">
                    <b>{t('배송비할인금액')}</b>
                  </Typography>
                  <Typography gutterBottom>
                    {`${order.deliveryDiscountAmount?.toLocaleString()}${t(
                      'general/won'
                    )}`}
                  </Typography>
                </Box>
              )}
              <Box display="flex" justifyContent="space-between">
                <Typography gutterBottom>
                  <b>{t('general/estimated-refund-amount')}</b>
                </Typography>
                <Typography gutterBottom>
                  {`${order.totalAmount?.toLocaleString()}${t('general/won')}`}
                </Typography>
              </Box>
              <Box p={1} textAlign="center" color="#f50057">
                <Typography variant="caption">
                  {t('general/already-delivery-receive')}
                </Typography>
              </Box>

              {/* 결제 취소버튼 */}
              <Box pt={2} display="flex" justifyContent="center">
                <Box>
                  <Button
                    disableElevation
                    variant="contained"
                    disabled={isLoading}
                    onClick={proceedCancel}
                  >
                    {isLoading ? (
                      <CircularProgress size="1.5rem" />
                    ) : (
                      t('general/cancel')
                    )}
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default OrderCancelDialog;
