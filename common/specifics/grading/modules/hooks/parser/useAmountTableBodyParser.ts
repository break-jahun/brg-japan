import useConvertDataToText from '@/common/modules/hooks/useConvertDataToText';
import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';
import { useTranslation } from 'react-i18next';

interface Content {
  name: string;
  quantity: string;
  price: string;
  sum: string;
  unit: string;
}

const useAmountTableBodyParser = (order: GradingOrderAttributes) => {
  const { t } = useTranslation();
  const { priceUnit } = useConvertDataToText();

  const paymentAmount = t('payment-7');
  const discountPrice = t('discountPrice');
  const localeDiscountPrice = `${order.discountPrice?.toLocaleString()} ${priceUnit}`;
  const deliveryCharge = t('orderID-19');
  const deliveryCost = `${order.deliveryCost?.toLocaleString()} ${priceUnit}`;
  const sum = t('payment-8');
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

export default useAmountTableBodyParser;
