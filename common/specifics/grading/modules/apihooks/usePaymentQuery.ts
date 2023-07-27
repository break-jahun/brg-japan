import { useTranslation } from 'react-i18next';
import { useMutation } from '@tanstack/react-query';
import tossPayments from '@/specifics/grading/modules/api/tossPayments';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { serviceTypeState } from '@/common/modules/recoil/gradingOrder';

export const usePaymentApproveMutation = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const serviceType = useRecoilValue(serviceTypeState);
  const pathname = serviceType === 'REHOLDER' ? 'reholder' : 'grading';

  return useMutation(tossPayments.paymentApprove, {
    onSuccess: (response) => {
      if (response.code === 0) {
        alert(t('grading/payment/complete'));
      } else {
        alert(`${t('grading/payment/fail')}`);
        router.replace(`/${pathname}/submit/payment`);
      }
    },
    onError: (error) => {
      alert(`${t('grading/payment/fail')}: ${error}`);
      router.replace(`/${pathname}/submit/payment`);
    },
  });
};
