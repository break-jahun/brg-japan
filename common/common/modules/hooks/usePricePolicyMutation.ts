import { useMutation } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import pricePolicy from '@/common/modules/api/pricePolicy';

export const usePricePolicyPostMutation = () => {
  const { t } = useTranslation();

  return useMutation(pricePolicy.calculation, {
    onError: (error) => {
      alert(t('orderInfo/fail'));
      //   Sentry.captureException(error);
    },
  });
};
