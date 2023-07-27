import { shippingAddressState } from '@/common/modules/recoil/address';
import {
  gradingOrderAtom,
  gradingOrderState,
  isServiceAgreementCheckedState,
  paymentMethodState,
  refundAccountState,
} from '@/common/modules/recoil/gradingOrder';
import { imageIdsState, imagesState } from '@/common/modules/recoil/image';
import { useRecoilValue, useResetRecoilState } from 'recoil';

const useTotalPaymentState = () => {
  const gradingOrder = useRecoilValue(gradingOrderState);
  const shippingAddress = useRecoilValue(shippingAddressState);
  const imageIds = useRecoilValue(imageIdsState);
  const paymentMethod = useRecoilValue(paymentMethodState);
  const refundAccount = useRecoilValue(refundAccountState);

  const totalGradingOrder = {
    ...gradingOrder,
    address: shippingAddress || undefined,
    addressId: shippingAddress?.id,
    paymentMethod,
  };

  return {
    gradingOrder: totalGradingOrder,
    imageIds,
    refundAccount,
    paymentMethod,
  };
};

export default useTotalPaymentState;
