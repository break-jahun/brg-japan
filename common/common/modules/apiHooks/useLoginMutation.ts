import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UseLoginMutationResult } from '@/common/types/user/auth';
import auth from '@/common/modules/api/auth';
import { Locals, queryKeys } from '@/common/types/common';
import { useBeforeInvoiceInsertQuery } from '@/common/modules/hooks/useBeforeInvoiceInsertQuery';
import { setNotExpiredCookie } from '@/common/modules/utils/cookie';

/**
 * @remarks
 * 이메일 로그인을 하는 mutation 입니다.
 */

function useLoginMutation(): UseLoginMutationResult {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const { refetch: beforeInvoiceInsertRefetch } = useBeforeInvoiceInsertQuery();
  return useMutation(auth.login, {
    onSuccess: async (data) => {
      setNotExpiredCookie(Locals.REFRESH_TOKEN, data?.data.refreshToken);
      await queryClient.refetchQueries(queryKeys.user);
      // 추후 로겟 로그인 추가 후 연동

      await beforeInvoiceInsertRefetch();
      // 로그인 후 송장번호 입력전 n개 알러트 안내
    },
    onError: (error: AxiosError) => {
      if (error.response?.data.code === 10205) {
        alert(t('로그인또는비밀번호틀림'));
      } else if (error.response?.data.code === 10207) {
        alert(t('인증되지않은메일'));
      } else if (error.response?.data.code === 10212) {
        alert(t('이미탈퇴한메일'));
      } else {
        alert(t('로그인실패안내'));
      }
    },
  });
}

export default useLoginMutation;
