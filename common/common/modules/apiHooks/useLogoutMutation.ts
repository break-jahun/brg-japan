import auth from '@/common/modules/api/auth';
import { useRouter } from 'next/router';
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { Locals, queryKeys } from '@/common/types/common';

/**
 * @remarks
 * 로그아웃을 하는 뮤테이션입니다.
 *
 */
function useLogoutMutation(): UseMutationResult {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(auth.logout, {
    onSuccess: () => {
      Cookies.remove(Locals.REFRESH_TOKEN);
      Cookies.remove(Locals.USER);
      queryClient.removeQueries(queryKeys.user, { exact: true });
      router.push('/');
    },
    onError: (error) => {
      alert(error);
    },
  });
}

export default useLogoutMutation;
