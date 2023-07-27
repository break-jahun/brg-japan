import { AxiosError } from 'axios';
import { GetUserResponse } from '@/common/types/user/auth';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import auth from '@/common/modules/api/auth';
import useDateUtils from '@/common/modules/hooks/useDateUtils';

/**
 * @remarks
 * 유저 이메일로 비밀번호 변경 링크를 보내는 뮤테이션입니다.
 *
 */
export function useSendPasswordChangeLinkMutation(): UseMutationResult<
  GetUserResponse,
  AxiosError,
  string
> {
  const { t } = useTranslation();
  const { getDateWithYMDHm } = useDateUtils();

  return useMutation(auth.sendPasswordChangeLink, {
    onSuccess: () => {
      alert(t('비밀번호변경메일발송'));
    },
    onError: (error: AxiosError) => {
      const data = error.response?.data;
      const { code } = data;

      if (code === 10301) {
        alert(t('존재하지않는이메일'));
      } else if (code === 10307) {
        alert(t('소셜계졍비번변경불가'));
      } else if (code === 10317) {
        alert(
          `${data.data.social} 으로 ${getDateWithYMDHm(
            data.data.createdAt as string
          )} 에 가입하셨습니다.`
        );
      } else {
        alert(t('서버에러'));
      }
    },
  });
}
