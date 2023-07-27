import {
  newGradingOrderItemsState,
  newGradingOrderState,
} from '@/common/modules/recoil/gradingOrder';
import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { gradingSubmitTypeState } from '@/specifics/grading/modules/recoil/apply';
import useGradingOrderCalculateMutation from '@/common/modules/apiHooks/useGradingOrderCalculateMutation';
import { shippingAddressState } from '@/common/modules/recoil/address';

const useSetCalculatedGradingOrder = () => {
  const [gradingOrder, setGradingOrder] = useRecoilState(newGradingOrderState);
  const setGradingOrderItems = useSetRecoilState(newGradingOrderItemsState);
  const shippingAddress = useRecoilValue(shippingAddressState);

  const submitType = useRecoilValue(gradingSubmitTypeState);

  const { mutate } = useGradingOrderCalculateMutation();

  const setCaculatedGradingOrder = (
    newGradingOrderItems: GradingOrderItemAttributes[]
  ) => {
    const items = newGradingOrderItems.map(({ cardCategory, isAuto }) => ({
      cardCategory,
      isAuto,
    }));

    const { gradingOrderType } = gradingOrder;
    const shippingMethod = gradingOrder.shippingMethod || 'SELF_SHIPPING';
    const body = {
      gradingOrderType,
      shippingMethod,
      submitType,
      items,
      addressId: shippingAddress?.id,
    };

    mutate(body, {
      onSuccess: ({ data }) => {
        if (data) {
          setGradingOrder((prev) => ({
            ...prev,
            totalPrice: data.price,
            totalQt: data.items.length,
            totalAmount: data.amount,
          }));
          const mergedGradingOrderItems = newGradingOrderItems.map(
            (item, index) => ({
              ...item,
              ...data.items[index],
            })
          );

          setGradingOrderItems(mergedGradingOrderItems);
        }
      },
    });
  };

  return { setCaculatedGradingOrder };
};

export default useSetCalculatedGradingOrder;
