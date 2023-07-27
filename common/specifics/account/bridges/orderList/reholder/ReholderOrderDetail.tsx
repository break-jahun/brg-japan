import { CommonButton } from '@/common/components/Button';
import useOpen from '@/common/modules/hooks/useOpen';
import { GRADING_ORDER_STATUS_INFO } from '@/common/types/grading/gradingOrder';
import { getOrderDetailOfReholderOrder } from '@/common/utils/order/equalizeOrder';
import OrderCancelDialog from '@/specifics/account/bridges/orderList/Order/OrderCancelDialog';
import OrderDeliveryAddressSection from '@/specifics/account/bridges/orderList/Order/OrderDeliveryAddressSection';
import OrderDeliveryMessage from '@/specifics/account/bridges/orderList/Order/OrderDeliveryMessage';
import OrderDeliveryShippingInSection from '@/specifics/account/bridges/orderList/Order/OrderDeliveryShippingInSection';
import OrderDeliveryShippingOutSection from '@/specifics/account/bridges/orderList/Order/OrderDeliveryShippingOutSection';
import OrderDepositInfo from '@/specifics/account/bridges/orderList/Order/OrderDepositInfo';
import OrderItemsListSection from '@/specifics/account/bridges/orderList/Order/OrderItemsListSection';
import OrderPaymentInfoSection from '@/specifics/account/bridges/orderList/Order/OrderPaymentInfoSection';
import OrderRefundAccountInfo from '@/specifics/account/bridges/orderList/Order/OrderRefundAccountInfo';
import OrderShippingOutCountInfoSection from '@/specifics/account/bridges/orderList/Order/OrderShippingOutCountInfoSection';
import { OrderInfoContainer } from '@/specifics/account/components/OrderDetail/OrderInfoContainer';
import OrderProcess from '@/specifics/account/components/OrderDetail/OrderProcess';
import {
  useGetReholderOrderByIdQuery,
  useGetReholderOrderDetailByIdQuery,
} from '@/specifics/account/modules/apihooks/useGetReholderOrderQuery';
import useServiceOrderPresentationType from '@/specifics/account/modules/hooks/useServiceOrderPresentationType';
import useServiceOrderProcessParser from '@/specifics/account/modules/hooks/useServiceOrderProcessParser';
import { Box, Button } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Bank } from '@tosspayments/payment__types/types/models/Bank';
import { ReholderOrderAttributes } from '@/common/types/reholderOrder/reholderOrder';

function useReholderOrderDetailData(id: string) {
  const { data: reholderOrderData, refetch } =
    useGetReholderOrderDetailByIdQuery(id);
  const order = useMemo(() => {
    if (reholderOrderData) {
      return getOrderDetailOfReholderOrder(reholderOrderData?.result as any);
    }
    return undefined;
  }, [reholderOrderData]);
  return {
    order,
    refetch,
  };
}

function ReholderOrderDetail({ id }: { id: string }) {
  const { t } = useTranslation();

  const { order, refetch } = useReholderOrderDetailData(id);
  const { title, stepText, validSteps, activeStep } =
    useServiceOrderProcessParser({
      order,
      serviceType: 'REHOLDER',
    });

  const { presentationType } = useServiceOrderPresentationType(order);

  const {
    open: isOpenCancelOrder,
    handleOpen: handleOpenCancelOrder,
    handleClose: handleCloseCancelOrder,
  } = useOpen();

  if (!presentationType) {
    return null;
  }

  return order ? (
    <Box sx={{ minHeight: '100vh' }}>
      <Box
        sx={{
          overflow: 'auto',
          position: 'relative',
          float: 'right',
          transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
          maxHeight: '100%',
          width: '100%',
        }}
      >
        <Box sx={{ padding: '8px' }}>
          <OrderProcess
            title={title}
            stepText={stepText}
            validSteps={validSteps}
            activeStep={activeStep}
          />
        </Box>

        {/* 가상계좌로 결제한 주문이 '입금 대기중' 상태일 때 입금 기한 및 계좌 정보를 보여줍니다. */}
        {presentationType === 'WAITING_FOR_DEPOSIT' && (
          <OrderInfoContainer>
            <OrderDepositInfo serviceType="REHOLDER" order={order} />
          </OrderInfoContainer>
        )}

        {GRADING_ORDER_STATUS_INFO.ALLOWED_TO_SHOW_GRADING_RESULTS_SUMMARY_TYPE.includes(
          presentationType
        ) && (
          <OrderInfoContainer>
            <OrderShippingOutCountInfoSection order={order} />
          </OrderInfoContainer>
        )}

        {GRADING_ORDER_STATUS_INFO.ALLOWED_TO_SHOW_DELIVERY_INFO_TYPE.includes(
          presentationType
        ) &&
          !GRADING_ORDER_STATUS_INFO.DELIVERY_INFO_SENT_TO_THE_USER.includes(
            presentationType
          ) && (
            <>
              {order.serviceOrderStatus === 'PROCESSING' && (
                <OrderDeliveryMessage order={order} />
              )}

              {[
                ...GRADING_ORDER_STATUS_INFO.DELIVERY_INFO_SENT_TO_BREAK,
                'NEED_INVOICE_INPUT',
              ].includes(presentationType) && (
                <OrderInfoContainer>
                  <OrderDeliveryShippingInSection
                    serviceType="REHOLDER"
                    order={order}
                    refetch={refetch}
                  />
                </OrderInfoContainer>
              )}
            </>
          )}

        {GRADING_ORDER_STATUS_INFO.DELIVERY_INFO_SENT_TO_THE_USER.includes(
          presentationType
        ) && (
          <OrderInfoContainer>
            <OrderDeliveryShippingOutSection order={order} />
          </OrderInfoContainer>
        )}
        <OrderInfoContainer>
          {order.payment && order.payment.refundReceiveAccount && (
            <OrderRefundAccountInfo
              defaultBank={order.payment.refundReceiveAccount.bank}
              defaultAccountName={
                order.payment.refundReceiveAccount.holderName as Bank
              }
              defaultAccountNumber={
                order.payment.refundReceiveAccount.accountNumber
              }
              disabled={order.serviceOrderStatus !== 'WRONG_REFUND_ACCOUNT'}
              order={order}
              refetch={refetch}
              serviceOrderType="REHOLDER"
            />
          )}
        </OrderInfoContainer>
        {/* 주문 취소가 가능한 단계의 주문인 경우 "주문 취소" 버튼을 활성화시킵니다. */}
        {GRADING_ORDER_STATUS_INFO.REVOCABLE_TYPE.includes(
          presentationType
        ) && (
          <OrderInfoContainer>
            <Box textAlign="center">
              <CommonButton
                buttonType="TEXT"
                disableElevation
                size="small"
                onClick={handleOpenCancelOrder}
              >
                {t('general/order-cancel')}
              </CommonButton>
            </Box>
          </OrderInfoContainer>
        )}

        {/* 배송지 주소 */}
        {order.address &&
          order.id &&
          GRADING_ORDER_STATUS_INFO.ALLOWED_TO_SHOW_ADDRESS_TYPE.includes(
            presentationType
          ) && (
            <OrderInfoContainer>
              <OrderDeliveryAddressSection
                presentationType={presentationType}
                address={order.address}
                serviceType="REHOLDER"
                orderId={order.id}
                refetch={refetch}
                order={order}
              />
            </OrderInfoContainer>
          )}
        {/* 결제정보 및 주문내역 */}
        {order.payment && (
          <OrderInfoContainer>
            <OrderPaymentInfoSection order={order} serviceType="REHOLDER" />
          </OrderInfoContainer>
        )}
        {/* 그레이딩 점수 아이템 리스트 */}
        {order && presentationType !== 'CANCELLED' && (
          <OrderInfoContainer>
            <OrderItemsListSection order={order} />
          </OrderInfoContainer>
        )}
      </Box>

      <OrderCancelDialog
        isOpenCancelOrder={isOpenCancelOrder}
        order={order}
        serviceType="REHOLDER"
        refetch={refetch}
        handleCloseCancelOrder={handleCloseCancelOrder}
      />
    </Box>
  ) : null;
}

export default ReholderOrderDetail;
