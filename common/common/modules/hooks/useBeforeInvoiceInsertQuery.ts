import { AxiosError } from 'axios';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GetGradingOrder } from '@/common/types/order';
import { useRouter } from 'next/router';
import { queryKeys } from '@/common/types/common';
import gradingOrder from '@/common/modules/api/gradingOrder';

/**
 * @remarks
 * 운송장번호 미입력 주문건이 있을경우 알려주는 쿼리입니다.
 *
 */
export function useBeforeInvoiceInsertQuery(): UseQueryResult<
  GetGradingOrder,
  AxiosError
> {
  const router = useRouter();
  return useQuery<GetGradingOrder, AxiosError>(
    queryKeys.beforeInvoiceInsert,
    () => gradingOrder.getGradingOrder({ sortBy: 'createdAt' }),
    {
      enabled: false,
      onSuccess: (data) => {
        const gradingOrderList = data.data.rows;
        const filteredBeforeInvoiceInsert = gradingOrderList.filter(
          (order) =>
            order.gradingOrderStatus === 'PROCESSING' &&
            order.gradingOrderProcessingStatus ===
              'OWN_SHIPPING_BEFORE_INSERT_INVOICE_INFORMATION'
        );
        if (
          filteredBeforeInvoiceInsert &&
          filteredBeforeInvoiceInsert.length > 0
        ) {
          const confirmed = window.confirm(
            `운송장 번호를 입력하지 않은 주문이 ${filteredBeforeInvoiceInsert.length} 건 있습니다.
            \n운송장 번호 미기입시 상품 확인이 지연되어 입고 처리 기간이 오래 걸릴 수 있습니다.\n운송장 번호를 입력하시겠습니까?`
          );
          if (confirmed) {
            // TODO: 추후 리코일 적용하기
            // orderType이 0(GRADING)이 아닌 경우, 주문 리스트 진입 시 GRADING 주문 리스트가 보이도록 하기 위해 dispatch 합니다.
            // if (orderType !== 0) dispatch(orderActions.changeMyOrderListType(0));

            router.push('/account/orderList');
            return;
          }
        }
        router.replace(String(router.query?.returnUrl ?? '/'));
      },
      onError: (error) => {
        alert(error);
      },
    }
  );
}
