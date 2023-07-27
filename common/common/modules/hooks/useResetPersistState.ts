import { shippingAddressState } from '@/common/modules/recoil/address';
import {
  gradingOrderAtom,
  gradingOrderState,
  isServiceAgreementCheckedState,
  paymentMethodState,
  refundAccountState,
} from '@/common/modules/recoil/gradingOrder';
import { useResetRecoilState } from 'recoil';
import { imageIdsState, imagesState } from '@/common/modules/recoil/image';
import {
  fetchedReholderPriceState,
  fetchedReholderTotalAmountState,
  fetchedReholderTotalPriceState,
  reholderCardListState,
} from '@/common/modules/recoil/reholder';
import { gradingSubmitTypeAtom } from '@/specifics/grading/modules/recoil/apply';

function useResetPersistState() {
  const resetGradingOrder = useResetRecoilState(gradingOrderAtom);
  const resetShippingAddress = useResetRecoilState(shippingAddressState);
  const resetImages = useResetRecoilState(imagesState);
  const resetPaymentMethod = useResetRecoilState(paymentMethodState);
  const resetRefundAccount = useResetRecoilState(refundAccountState);
  const resetIsServiceAgreementChecked = useResetRecoilState(
    isServiceAgreementCheckedState
  );
  const resetFetchedReholderPrice = useResetRecoilState(
    fetchedReholderPriceState
  );
  const resetReholderTotalAmount = useResetRecoilState(
    fetchedReholderTotalAmountState
  );
  const resetReholderTotalPrice = useResetRecoilState(
    fetchedReholderTotalPriceState
  );
  const resetSubmitType = useResetRecoilState(gradingSubmitTypeAtom);

  const resetPersistState = () => {
    resetGradingOrder();
    resetShippingAddress();
    resetImages();
    resetPaymentMethod();
    resetRefundAccount();
    resetIsServiceAgreementChecked();
    resetFetchedReholderPrice();
    resetReholderTotalAmount();
    resetReholderTotalPrice();
    resetSubmitType();
  };

  return resetPersistState;
}

export default useResetPersistState;
