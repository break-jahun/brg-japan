import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { GNBLayout } from '@/common/bridges/Layout';
import AccountLayout from '@/specifics/account/bridges/AccountLayout';
import ReholderOrderDetail from '@/specifics/account/bridges/orderList/reholder/ReholderOrderDetail';

function OrderListReholderIdPage() {
  const router = useRouter();
  const id = useMemo(() => {
    if (!router.isReady) return null;
    if (!router.query.reholderId) return null;
    return router.query.reholderId as string;
  }, [router.isReady, router.query]);

  if (!id) {
    return null;
    // return <ErrorPage statusCode={404} />;
  }
  return (
    <GNBLayout>
      <AccountLayout title="">
        <ReholderOrderDetail id={id as string} />
      </AccountLayout>
    </GNBLayout>
  );
}
export default OrderListReholderIdPage;
