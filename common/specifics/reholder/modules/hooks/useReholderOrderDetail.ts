import {
  useGetReholderOrderByIdQuery,
  useGetReholderOrderDetailByIdQuery,
} from '@/specifics/account/modules/apihooks/useGetReholderOrderQuery';
import { useRouter } from 'next/router';

function useReholderOrderDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: previousData } = useGetReholderOrderByIdQuery(
    typeof id === 'string' ? id : '',
    {
      enabled: !!id,
    }
  );

  const reholderId = previousData?.result?.id;

  const { data } = useGetReholderOrderDetailByIdQuery(`${reholderId}`, {
    enabled: !!reholderId,
  });

  return { data: data?.result };
}

export default useReholderOrderDetail;
