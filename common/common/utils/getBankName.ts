import { Bank } from '@tosspayments/payment__types/types/models/Bank';
import { TFunction } from 'react-i18next';

type BankInfo = {
  [key in Bank]?: string;
};

const getBankName = (
  bank: Bank,
  t: TFunction<'translation', undefined>
): string => {
  const translatedBank: BankInfo = {
    광주: t('tossPayments/bank/gwangjubank'),
    국민: t('tossPayments/bank/kookmin'),
    기업: t('tossPayments/bank/ibk'),
    농협: t('tossPayments/bank/nonghyeop'),
    대구: t('tossPayments/bank/daegubank'),
    부산: t('tossPayments/bank/busanbank'),
    산업: t('tossPayments/bank/kdb'),
    새마을: t('tossPayments/bank/saemaul'),
    산림: t('tossPayments/bank/sanlim'),
    수협: t('tossPayments/bank/suhyeop'),
    신한: t('tossPayments/bank/shinhan'),
    신협: t('tossPayments/bank/shinhyup'),
    씨티: t('tossPayments/bank/citi'),
    우리: t('tossPayments/bank/woori'),
    우체국: t('tossPayments/bank/post'),
    저축: t('tossPayments/bank/savingbank'),
    전북: t('tossPayments/bank/jeonbukbank'),
    제주: t('tossPayments/bank/jejubank'),
    카카오: t('tossPayments/bank/kakaobank'),
    케이: t('tossPayments/bank/kbank'),
    토스: t('tossPayments/bank/tossbank'),
    하나: t('tossPayments/bank/hana'),
    SC제일: t('tossPayments/bank/sc'),
  };

  return translatedBank[bank] || '';
};

export default getBankName;
