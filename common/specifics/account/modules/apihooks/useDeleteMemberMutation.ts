import useLogoutMutation from '@/common/modules/apiHooks/useLogoutMutation';
import profile, {
  DeleteMemberResponse,
} from '@/specifics/account/modules/api/profile';
import { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

export const useDeleteMemberMutation = (): UseMutationResult<
  DeleteMemberResponse,
  AxiosError
> => {
  const { t } = useTranslation();
  const { mutate: logoutMutate } = useLogoutMutation();

  return useMutation(profile.deleteMember, {
    onSuccess: () => {
      alert(t('account/member/success-withdrawal'));
      logoutMutate({});
    },
    onError: (error) => {
      if (error.response?.data.code === 10316) {
        alert(t('account/member/error-withdrawal'));
      } else {
        alert(t('account/member/fail-withdrawal'));
      }
    },
  });
};
