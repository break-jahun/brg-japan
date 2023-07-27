import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { useMemo } from 'react';
import { GNBLayout } from '@/common/bridges/Layout';
import AccountLayout from '@/specifics/account/bridges/AccountLayout';
import GradingOrderDetail from '@/specifics/account/bridges/orderList/grading/GradingOrderDetail';

function OrderListGradingIdPage() {
  const router = useRouter();
  const id = useMemo(() => {
    if (!router.isReady) return null;
    if (!router.query.gradingId) return null;
    return router.query.gradingId as string;
  }, [router.isReady, router.query]);

  if (!id) {
    return null;
    // return <ErrorPage statusCode={404} />;
  }
  return (
    <GNBLayout>
      <AccountLayout title="">
        <GradingOrderDetail id={id as string} />
      </AccountLayout>
    </GNBLayout>
  );
}
export default OrderListGradingIdPage;
