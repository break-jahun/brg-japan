import TERM from '@/constants/TERM';
import { useTranslation } from 'react-i18next';

const useExpressRecommendationParser = (differenceCost: number) => {
  const { t } = useTranslation();

  const notice1 = `${t('payment/form/notice-order-1')} ${
    TERM.ESTIMATED_SHIPPING_TERM.REG
  } ${t('payment/form/notice-order-2')}`;

  const express = t('general/express');

  const notice2 = `${t(
    'payment/form/notice-order-3'
  )} ${differenceCost.toLocaleString()}${t('payment/form/notice-order-4')} ${
    TERM.ESTIMATED_SHIPPING_TERM.REG - TERM.ESTIMATED_SHIPPING_TERM.EXP
  }${t('payment/form/notice-order-5')}`;

  const orderByExpress = t('payment/form/order-by-express');
  const yes = t('general/yes');
  const no = t('general/no');

  return {
    notice1,
    notice2,
    express,
    orderByExpress,
    yes,
    no,
  };
};

export default useExpressRecommendationParser;
