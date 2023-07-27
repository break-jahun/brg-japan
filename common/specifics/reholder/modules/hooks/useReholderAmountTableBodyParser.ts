import useConvertDataToText from '@/common/modules/hooks/useConvertDataToText';
import { ReholderOrderAttributes } from '@/common/types/reholderOrder/reholderOrder';
import { ReholderDetailResultType } from '@/specifics/account/modules/type/reholderOrder';
import { useTranslation } from 'react-i18next';

interface Content {
  name: string;
  quantity: string;
  price: string;
  sum: string;
  unit: string;
}

const useReholderAmountTableBodyParser = (order: ReholderDetailResultType) => {
  const { t } = useTranslation();
  const { priceUnit } = useConvertDataToText();

  const paymentAmount = t('grading/order/complete/payment-amount');
  const discountPrice = t('discountPrice');
  const localeDiscountPrice = `${order.discountPrice?.toLocaleString()} ${priceUnit}`;
  const deliveryCharge = t('general/delivery-charge');
  const deliveryCost = `${order.deliveryCost?.toLocaleString()} ${priceUnit}`;
  const sum = t('grading/order/complete/sum');
  const totalAmountValue = order?.totalAmount ?? 0;

  const getItemText = (content: Content) =>
    `${content.name} ${content.quantity} ${t('general/a-sheet')}`;
  const getItemPrice = (content: Content) => `${content.sum} ${content.unit}`;
  const totalAmount = `${totalAmountValue.toLocaleString()} ${priceUnit}`;

  return {
    paymentAmount,
    discountPrice,
    deliveryCharge,
    localeDiscountPrice,
    deliveryCost,
    sum,
    totalAmount,
    getItemText,
    getItemPrice,
  };
};

export default useReholderAmountTableBodyParser;
