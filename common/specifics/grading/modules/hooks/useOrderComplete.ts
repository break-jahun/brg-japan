import { useGetGradingOrderByIdQuery } from '@/common/modules/apiHooks/useGetGradingOrderByIdQuery';
import { useRouter } from 'next/router';

const useOrderComplete = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetGradingOrderByIdQuery(
    typeof id === 'string' ? id : ''
  );

  return { data };
};

export default useOrderComplete;
