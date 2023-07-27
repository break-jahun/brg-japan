import _ from 'lodash';
import { CostPolicy } from '@/common/types/cost/costPolicy';
import {
  CurrencyType,
  GradingOrderAttributes,
  GradingOrderShippingMethod,
  GradingSubmitType,
} from '@/common/types/grading/gradingOrder';
import {
  CardCategory,
  GradingOrderItemAttributes,
  SportsType,
} from '@/common/types/grading/gradingOrderItem';
import { Membership } from '@/common/types/user/memberShip';
import { Country } from '@/common/types/supportRegion';
import { ServiceType } from '@/common/types/serviceOrder/serviceOrder';
import client from '../client';

export interface GetPricePolicy extends Response {
  data: {
    costPolicy: CostPolicy;
    membership: Membership;
  };
}

export interface CalculationResponse extends Response {
  data: {
    item: {
      id: number;
      gradingOrderId: number;
      sportsType: SportsType;
      price: number;
      discountRate: string;
      itemAmount: number;
    }[];
    delivery: {
      deliveryAmount: number;
      deliveryIsolatedPrice: number;
      deliveryPrice: number;
    };
    total: {
      price: number;
      discountPrice: number;
      amount: number;
    };
  };
}

interface FilteredGradingOrder
  extends Pick<
    GradingOrderAttributes,
    'totalQt' | 'shippingMethod' | 'gradingOrderType' | 'currency' | 'addressId'
  > {
  gradingOrderItems: Pick<
    GradingOrderItemAttributes,
    'cardCategory' | 'isAuto'
  >[];
}

/**
 * @remarks
 * 가격정책 관련 정보를 불러오는 함수입니다.
 *
 */
async function getPricePolicy(country: Country): Promise<GetPricePolicy> {
  const { data } = await client.get<GetPricePolicy>(
    `/api/cost/policy/${country}`
  );
  return data;
}

/**
 * @remarks
 * api 요청 전 gradingOrder 중 필요한 속성값들만 남겨주는 함수입니다.
 */
const filterGradingOrder = (gradingOrder: GradingOrderAttributes) => {
  const newGradingOrder: FilteredGradingOrder = {
    ..._.pick(gradingOrder, [
      'totalQt',
      'shippingMethod',
      'gradingOrderType',
      'currency',
      'addressId',
    ]),
    currency: 'KRW',
    gradingOrderItems: [],
  };
  const newGradingOrderItems =
    gradingOrder.gradingOrderItems?.map((item) =>
      _.pick(item, ['cardCategory', 'isAuto'])
    ) ?? [];
  newGradingOrder.gradingOrderItems = newGradingOrderItems;

  return newGradingOrder;
};

export interface CalculationOrderType {
  orderItems?: {
    id: number;
    cardCategory: CardCategory;
  }[];
  totalQt: number;
  shippingMethod: GradingOrderShippingMethod;
  orderType: 'REHOLDER';
  currency: CurrencyType;
  addressId: number;
}

interface CalculationParams {
  gradingOrder: GradingOrderAttributes;
  order: CalculationOrderType;
  serviceType: ServiceType;
}

/**
 * @remarks
 * 가격계산된 데이터를 불러오는 함수입니다.
 *
 */
async function calculation(
  params: CalculationParams
): Promise<CalculationResponse> {
  const { gradingOrder, serviceType, order } = params;
  const { data } = await client.post<CalculationResponse>(
    serviceType === 'REHOLDER'
      ? '/api/cost/calculation?service=reholder'
      : '/api/cost/calculation',
    {
      gradingOrder: filterGradingOrder(gradingOrder),
      orderType: serviceType,
      order,
    }
  );
  return data;
}

export default {
  getPricePolicy,
  calculation,
};
