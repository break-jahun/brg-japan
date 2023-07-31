import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

function useGetRouterQuery<T extends ParsedUrlQuery>() {
  const router = useRouter();

  const query = router.query as T;

  return query;
}

export default useGetRouterQuery;
