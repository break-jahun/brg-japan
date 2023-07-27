import { useMutation } from '@tanstack/react-query';
import gradingOrder, {
  PostGradingOrderCalculateBody,
} from '@/common/modules/api/gradingOrder';
import { AxiosError } from 'axios';
import { Response } from '@/common/types/common';
import { CardCategory } from '@/common/types/grading/gradingOrderItem';

interface ItemResponse {
  amount: number;
  cardCategory: CardCategory;
  discountPrice: number;
  price: number;
}

interface CalculationResponse {
  currency: string;
  price: number;
  amount: number;
  itemAmount: number;
  items: ItemResponse[];
  discountAmount: number;
  deliveryAmount: number;
  deliveryPrice: number;
  deliveryIsolatedAmount: number;
}

const useGradingOrderCalculateMutation = () => {
  return useMutation<
    Response<CalculationResponse>,
    AxiosError,
    PostGradingOrderCalculateBody
  >(gradingOrder.postGradingOrderCalculate);
};

export default useGradingOrderCalculateMutation;
