import { shippingAddressState } from '@/common/modules/recoil/address';
import { newGradingOrderItemsState } from '@/common/modules/recoil/gradingOrder';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import useSetCalculatedGradingOrder from '@/common/modules/hooks/useSetCalculatedGradingOrder';

const useNewCalculationEffect = () => {
  const shippingAddress = useRecoilValue(shippingAddressState);
  const gradingOrderItems = useRecoilValue(newGradingOrderItemsState);
  const { setCaculatedGradingOrder } = useSetCalculatedGradingOrder();

  useEffect(() => {
    if (shippingAddress) {
      setCaculatedGradingOrder(gradingOrderItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shippingAddress]);

  return null;
};

export default useNewCalculationEffect;
