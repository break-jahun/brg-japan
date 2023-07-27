import { useGetProductOrderQuery } from '@/common/modules/apiHooks/useGetProductOrderQuery';
import useGetGradingOrderQuery from '@/common/modules/hooks/useGetGradingOrderQuery';
import { useGetReholderOrderQuery } from '@/specifics/account/modules/apihooks/useGetReholderOrderQuery';
import { currentOrderTypeState } from '@/specifics/account/modules/recoil/orderList';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState } from 'recoil';

function useDeliverySummarySectionParser() {
  const { t } = useTranslation();
  const router = useRouter();
  const sectionTitle = t('dashboard-1');

  const setCurrentOrderType = useSetRecoilState(currentOrderTypeState);

  const { data: gradingOrderData } = useGetGradingOrderQuery();
  const gradingOrderCount = useMemo(() => {
    const gradingOrderList = gradingOrderData?.data.rows;
    const count =
      gradingOrderList?.filter(
        (order) => order.gradingOrderStatus === 'PROCESSING'
      ).length || 0;
    return count;
  }, [gradingOrderData?.data.rows]);

  const { data: reholderOrderData } = useGetReholderOrderQuery();
  const reholderOrderCount = useMemo(() => {
    const reholderOrderList = reholderOrderData?.data?.result?.rows;
    const count =
      reholderOrderList?.filter(
        (order) => order.reholderOrderStatus === 'PROCESSING'
      ).length || 0;
    return count;
  }, [reholderOrderData]);

  const { data: productOrderData } = useGetProductOrderQuery();
  const productOrderCount = useMemo((): number => {
    const productOrderList = productOrderData?.data.rows;
    const count =
      productOrderList?.filter(
        (order) =>
          order.productOrderStatus === 'PAYMENT_COMPLETE' ||
          order.productOrderStatus === 'SHIPPING_OUT'
      ).length || 0;
    return count;
  }, [productOrderData?.data.rows]);

  const ordersSummary = useMemo(
    () => [
      {
        title: 'GRADING',
        count: gradingOrderCount,
        onClick: () => {
          router.push('/account/orderList');
          setCurrentOrderType('GRADING');
        },
      },
      {
        title: 'REHOLDER',
        count: reholderOrderCount,
        onClick: () => {
          router.push('/account/orderList');
          setCurrentOrderType('REHOLDER');
        },
      },
      {
        title: 'EVENT',
        count: productOrderCount,
        onClick: () => {
          router.push('/account/orderList');
          setCurrentOrderType('EVENT');
        },
      },
      {
        title: 'COLLECTION',
        count: 0,
        onClick: () => {
          router.push('/account/collection/grading');
        },
      },
    ],
    [
      gradingOrderCount,
      productOrderCount,
      reholderOrderCount,
      router,
      setCurrentOrderType,
    ]
  );
  return {
    sectionTitle,
    ordersSummary,
  };
}

export default useDeliverySummarySectionParser;
