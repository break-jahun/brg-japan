import useDetectMobileDevice from '@/common/modules/hooks/useDetectMobile';
import { AxiosError } from 'axios';
import { useMutation, UseMutationResult } from '@tanstack/react-query';

import kakaoPay, {
  KakaoPayApproveParams,
  paymentApproveResponse,
  ReadyKakaoPay,
  ReadyKakaoPayParams,
} from '@/specifics/grading/modules/api/kakaoPay';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { kakopayInfoState } from '@/common/modules/recoil/kakaopay';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { serviceTypeState } from '@/common/modules/recoil/gradingOrder';

export const useKakaoPayReadyMutation = (): UseMutationResult<
  ReadyKakaoPay,
  AxiosError,
  ReadyKakaoPayParams
> => {
  const { isMobile } = useDetectMobileDevice();

  const setKakaoPayInfo = useSetRecoilState(kakopayInfoState);
  return useMutation(kakaoPay.readyKakaoPay, {
    onSuccess: ({ data }) => {
      if (data) {
        const {
          next_redirect_pc_url,
          next_redirect_mobile_url,
          tid,
          partner_order_id,
          partner_user_id,
        } = data;

        const popupWidth = 650;
        const popupHeight = 600;
        const popupX = window.screen.width / 2 - popupWidth / 2;
        const popupY = window.screen.height / 2 - popupHeight / 2;

        const url = isMobile ? next_redirect_mobile_url : next_redirect_pc_url;

        if (isMobile) {
          window.location.href = url;
        } else {
          window.open(
            url,
            '카카오페이',
            `width=${popupWidth}, height=${popupHeight}, left=${popupX}, top=${popupY};`
          );
        }

        setKakaoPayInfo({ tid, partner_order_id, partner_user_id });
      }
    },
    onError: (error) => {
      alert(error);
      //   Sentry.captureException(error);
    },
  });
};

export function useKakaoPayApproveMutation(): UseMutationResult<
  paymentApproveResponse,
  AxiosError,
  KakaoPayApproveParams
> {
  const router = useRouter();
  const { t } = useTranslation();
  const serviceType = useRecoilValue(serviceTypeState);
  const pathName = serviceType === 'REHOLDER' ? 'reholder' : 'grading';

  return useMutation(kakaoPay.kakaoPayPaymentApprove, {
    onSuccess: (response) => {
      if (response.code === 0) {
        alert(t('grading/payment/complete'));
        const responseId =
          serviceType === 'REHOLDER' ? response.data.orderId : response.data.id;

        router.replace(`/${pathName}/orderComplete/${responseId}`);
      } else {
        alert(`${t('grading/payment/fail')}`);
        router.replace(`/${pathName}/submit/payment`);
      }
    },
    onError: (error) => {
      alert(`${t('grading/payment/fail')}: ${error}`);
      router.replace(`/${pathName}/submit/payment`);
    },
  });
}
