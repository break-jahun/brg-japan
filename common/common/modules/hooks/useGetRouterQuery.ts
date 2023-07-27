import { useRouter } from 'next/router';

function useGetRouterQuery(key: string): string {
  const router = useRouter();

  const queryValue =
    router.query[key] ||
    router.asPath.match(new RegExp(`[&?]${key}=(.*)(&|$)`));

  if (!queryValue) return '';
  return queryValue as string;
}

export default useGetRouterQuery;
