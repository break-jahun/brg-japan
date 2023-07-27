import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PickUnion } from '@/common/types/common';
import {
  CurrencyType,
  GradingOrderAttributes,
} from '@/common/types/grading/gradingOrder';
import { PaymentMethod } from '@/common/types/payment';
import { GRADING_ORDER_ITEM } from '@/common/types/grading/gradingOrderItem';
import { useRecoilValue } from 'recoil';
import { ServiceOrderType } from '@/common/types/serviceOrder/serviceOrder';
import { newCurrencyState } from '@/common/modules/recoil/costPolicy';

export const SUBMIT_SPORTS_TYPE_LIST = [
  GRADING_ORDER_ITEM.SPORTS_TYPE.BASEBALL,
  GRADING_ORDER_ITEM.SPORTS_TYPE.BASKETBALL,
  GRADING_ORDER_ITEM.SPORTS_TYPE.SOCCER,
  GRADING_ORDER_ITEM.SPORTS_TYPE.POKEMON,
  GRADING_ORDER_ITEM.SPORTS_TYPE.YUGIOH,
  GRADING_ORDER_ITEM.SPORTS_TYPE.ENTERTAINMENT,
  GRADING_ORDER_ITEM.SPORTS_TYPE.ETC,
];

// 그레이딩 신청페이지에 보여질 스포츠타입
export type SubmitSportsType = typeof SUBMIT_SPORTS_TYPE_LIST[number];

type GetSportsTypeText = {
  [key in SubmitSportsType]: string;
};

type DisplayPrice = {
  [key in CurrencyType]: string;
};

type getPaymentSelectText = {
  [key in PickUnion<
    PaymentMethod,
    | 'CARD'
    | 'VIRTUAL_ACCOUNT'
    | 'PHONE'
    | 'GIFT_CARD'
    | 'TOSS_PAY'
    | 'CONNECT_PAY'
    | 'ACCOUNT_TRANSFER'
  >]: string;
};

function useConvertDataToText() {
  const { t, i18n } = useTranslation();

  const currency = useRecoilValue(newCurrencyState);

  //   tobe deprecated
  const getGradingOrderTypeInFullName = useCallback(
    (order: GradingOrderAttributes): string => {
      switch (order.gradingOrderType) {
        case 'EXP':
          return 'EXPRESS';
        case 'REG':
          return 'REGULAR';
        case 'BULK':
          return 'BULK';
        default:
          return t('general/no-information');
      }
    },
    [t]
  );

  const getServiceOrderTypeInFullName = useCallback(
    (orderType: ServiceOrderType | undefined): string => {
      switch (orderType) {
        case 'EXP':
          return 'EXPRESS';
        case 'REG':
          return 'REGULAR';
        case 'REHOLDER':
          return 'REHOLDER';
        case 'BULK':
          return 'BULK';
        default:
          return t('general/no-information');
      }
    },
    [t]
  );
  const sportsTypeText = useMemo(
    (): GetSportsTypeText => ({
      BASEBALL: t('general/baseball'),
      ENTERTAINMENT: t('general/entertainment'),
      BASKETBALL: t('general/basketball'),
      POKEMON: t('general/pokemon'),
      SOCCER: t('general/soccer'),
      YUGIOH: t('general/yugioh'),
      ETC: t('general/etc'),
    }),
    [t]
  );

  const displayPrice = useMemo(
    (): DisplayPrice => ({
      KRW: t('general/won'),
      USD: t('general/dollar'),
      TWD: t('TWD'),
    }),
    [t]
  );

  const priceUnit = displayPrice[currency];

  const getPaymentSelectText = useMemo((): getPaymentSelectText => {
    return {
      CARD: t('tossPayments/payment-method/card-selected'),
      VIRTUAL_ACCOUNT: t(
        'tossPayments/payment-method/virtual-account-selected'
      ),
      ACCOUNT_TRANSFER: t('tossPayments/payment-method/wire-transfer-selected'),
      PHONE: t('tossPayments/payment-method/mobile-payment-selected'),
      GIFT_CARD: t('tossPayments/payment-method/gift-card-pay-selected'),
      TOSS_PAY: t('tossPayments/payment-method/toss-pay-selected'),
      CONNECT_PAY: t('tossPayments/payment-method/quick-pay-selected'),
    };
  }, [t]);

  return {
    getGradingOrderTypeInFullName,
    getServiceOrderTypeInFullName,
    getPaymentSelectText,
    sportsTypeText,
    priceUnit,
  };
}

export default useConvertDataToText;
