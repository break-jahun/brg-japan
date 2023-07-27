import { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import profile, {
  ChangePasswordBody,
  ChangePasswordResponse,
} from '@/specifics/account/modules/api/profile';

export const useChangePasswordMutation = (): UseMutationResult<
  ChangePasswordResponse,
  AxiosError,
  ChangePasswordBody
> => {
  const { t } = useTranslation();

  return useMutation(profile.changePassword, {
    onError: (error) => {
      if (error?.response?.data.code === 10211) {
        alert(t('account/profile/same-pw'));
      } else if (error?.response?.data.code === 10205) {
        alert(t('account/profile/not-match-pw-2'));
      } else if (error?.response?.data.code === 10003) {
        alert(error?.response?.data.message);
      } else {
        alert(error);
      }
    },
  });
};
