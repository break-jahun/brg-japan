import { useCallback } from 'react';
import { KakaoLoginResponseType } from '@/common/types/user/auth';
import useKakaoSignUpMutation from '@/common/modules/apiHooks/useKakaoSignUpMutation';
import useSignUpParser from '@/specifics/auth/modules/hooks/parser/useSignUpParser';

function useKakaoSignUp() {
  const { mutate } = useKakaoSignUpMutation();
  const { failKakaoAccount } = useSignUpParser();

  const onSuccessKakaoSignUp = useCallback(
    (response: KakaoLoginResponseType) => {
      mutate({
        profile: response.profile,
        response: response.response,
        keepLogin: false,
      });
    },
    [mutate]
  );

  const onFailKakaoSignUp = useCallback(() => {
    alert(failKakaoAccount);
  }, [failKakaoAccount]);

  return {
    onSuccessKakaoSignUp,
    onFailKakaoSignUp,
  };
}

export default useKakaoSignUp;
