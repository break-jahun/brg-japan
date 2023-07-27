import { CalculationOrderType } from '@/common/modules/api/pricePolicy';
import { usePricePolicyPostMutation } from '@/common/modules/hooks/usePricePolicyMutation';
import { shippingAddressState } from '@/common/modules/recoil/address';
import {
  gradingOrderAtom,
  gradingOrderState,
  orderTypeState,
  totalQtState,
} from '@/common/modules/recoil/gradingOrder';
import {
  fetchedReholderPriceState,
  fetchedReholderTotalAmountState,
  fetchedReholderTotalPriceState,
  reholderCardListState,
  reholderPriceState,
  reholderTotalAmountState,
  reholderTotalPriceState,
} from '@/common/modules/recoil/reholder';
import { ServiceType } from '@/common/types/serviceOrder/serviceOrder';
import { gradingSubmitTypeState } from '@/specifics/grading/modules/recoil/apply';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { omit } from 'lodash';
import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';

interface CalculationEffectProps {
  serviceType: ServiceType;
}

const useCalculateEffect = ({ serviceType }: CalculationEffectProps) => {
  const shippingAddress = useRecoilValue(shippingAddressState);
  const orderType = useRecoilValue(orderTypeState);
  const [gradingOrder, setGradingOrder] = useRecoilState(gradingOrderAtom);
  const reholderCardList = useRecoilValue(reholderCardListState);
  const totalQt = useRecoilValue(totalQtState);
  const setReholderPrice = useSetRecoilState(fetchedReholderPriceState);
  const setReholderTotalPrice = useSetRecoilState(
    fetchedReholderTotalPriceState
  );
  const setReholderTotalAmount = useSetRecoilState(
    fetchedReholderTotalAmountState
  );

  const { mutate } = usePricePolicyPostMutation();

  useEffect(() => {
    if (shippingAddress) {
      const gradingOrderBody = {
        ...gradingOrder,
        gradingOrderType: orderType,
        addressId: shippingAddress.id,
        address: shippingAddress,
        serviceType,
      };
      const orderBody: CalculationOrderType = {
        addressId: shippingAddress.id || -1,
        currency: 'KRW',
        orderType: 'REHOLDER',
        shippingMethod: gradingOrder.shippingMethod || 'SELF_SHIPPING',
        totalQt,
        orderItems: reholderCardList?.map((item) => ({
          cardCategory: item.cardCategory,
          id: item.id,
        })),
      };

      mutate(
        {
          gradingOrder: gradingOrderBody,
          serviceType,
          order: orderBody,
        },
        {
          onSuccess: ({ data }) => {
            const newGradingOrder: GradingOrderAttributes = {
              ...gradingOrder,
              totalPrice: data.total?.price ?? 0,
              totalAmount: data.total?.amount ?? 0,
              deliveryCost: data.delivery?.deliveryAmount ?? 0,
              discountPrice: data.total?.discountPrice ?? 0,
              gradingOrderItems: gradingOrder.gradingOrderItems?.map(
                (item, index) => ({
                  ...item,
                  amount: data.item?.[index]?.itemAmount,
                  price: data.item?.[index]?.price,
                })
              ),
            };

            setGradingOrder(newGradingOrder);
            if (serviceType === 'REHOLDER') {
              const price = data.item?.[0]?.price ?? 0;
              const totalPrice = data.total.price ?? 0;
              const totalAmount = data.total.amount ?? 0;
              setReholderPrice(price);
              setReholderTotalPrice(totalPrice);
              setReholderTotalAmount(totalAmount);
            }
          },
        }
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shippingAddress, orderType]);

  return null;
};

export default useCalculateEffect;
