import { useGetReholderOrderByIdQuery } from '@/specifics/account/modules/apihooks/useGetReholderOrderQuery';
import { useRouter } from 'next/router';

function useReholderOrderComplete() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useGetReholderOrderByIdQuery(
    typeof id === 'string' ? id : ''
  );

  return { data: data?.result };
}

export default useReholderOrderComplete;
