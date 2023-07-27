import _ from 'lodash';
import { CurrencyType } from '@/common/types/grading/gradingOrder';
import {
  CARD_CATEGORY,
  GradingOrderItemAttributes,
  isAutoDisabledCategoryList,
} from '@/common/types/grading/gradingOrderItem';
import getCategoryText from '@/common/utils/getCategoryText';
import { useCallback, useMemo } from 'react';
import { LocaleType } from '@/common/types/common';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import {
  reholderCardListState,
  reholderPriceState,
} from '@/common/modules/recoil/reholder';
import { ServiceType } from '@/common/types/serviceOrder/serviceOrder';
import { newCurrencyState } from '@/common/modules/recoil/costPolicy';

type DisplayPrice = {
  [key in CurrencyType]: string;
};

export interface OrderContent {
  name: string;
  quantity: string;
  price: string;
  sum: string;
  unit: string;
}

export interface OrderSummary {
  name: string;
  content: OrderContent[];
}

interface ItemSummaryProps {
  orderItems?: GradingOrderItemAttributes[] | undefined;
  serviceType: ServiceType;
}

/**
 * @remarks
 * 결제예상금액에 표시되는 주문정보를 표시하기 위한 텍스트를 만들어줍니다.
 */
function useItemSummary({ orderItems, serviceType }: ItemSummaryProps) {
  const { t, i18n } = useTranslation();

  const currency = useRecoilValue(newCurrencyState);
  const reholderCardList = useRecoilValue(reholderCardListState);
  const reholderPrice = useRecoilValue(reholderPriceState);

  /**
   * @remarks 가격표시 정보입니다.
   */
  const displayPrice = useMemo(
    (): DisplayPrice => ({
      KRW: t('general/won'),
      USD: t('general/dollar'),
      TWD: t('TWD'),
    }),
    [t]
  );

  /**
   * @remarks 현재 가격표시입니다.
   */
  const priceUnit = displayPrice[currency];

  /**
   * @remarks
   * 아이템 데이터를 가지고 문장에 들어갈 데이터를 만들어주는 함수.
   * 반복되는 부분이라 함수로 만들었습니다.
   */
  const makeOrderSentenceData = useCallback(
    (items: GradingOrderItemAttributes[]) => {
      const quantity = items.length; // 수량
      const priceText = items?.[0]?.price?.toLocaleString() ?? ''; // 가격표시
      const sumText = (quantity * (items?.[0]?.price || 0)).toLocaleString(); // 가격 X 수량

      return {
        quantity: `${quantity}`,
        price: `${priceText}`,
        sum: `${sumText}`,
        unit: priceUnit,
      };
    },
    [priceUnit]
  );

  const reholderItemSummary = useMemo((): OrderSummary[] => {
    if (!reholderCardList) {
      return [];
    }

    return [
      {
        name: t('general/reholder'),
        content: [
          {
            name: t('general/reholder'),
            price: reholderPrice.toLocaleString(),
            quantity: `${reholderCardList.length}`,
            sum: (reholderPrice * reholderCardList.length).toLocaleString(),
            unit: priceUnit,
          },
        ],
      },
    ];
  }, [priceUnit, reholderCardList, reholderPrice, t]);

  const generalItemSummary = useMemo(() => {
    const orderSummaryList: OrderSummary[] = [];

    CARD_CATEGORY.forEach((category) => {
      const orderSummary: OrderSummary = {
        name: getCategoryText[category][i18n.language as LocaleType],
        content: [],
      };
      const filteredGradingOrderItems = orderItems?.filter(
        (orderItem) => orderItem.cardCategory === category
      );

      if (filteredGradingOrderItems && !_.isEmpty(filteredGradingOrderItems)) {
        orderSummary.name =
          getCategoryText[category][i18n.language as LocaleType];

        const autoList = filteredGradingOrderItems.filter(
          (item) => item?.isAuto
        ); // 오토에 해당되는 아이템들
        const nonAutoList = filteredGradingOrderItems.filter(
          (item) => !item?.isAuto
        ); // 오토가 아닌 아이템들
        const canNotAuto = isAutoDisabledCategoryList.includes(category); // 오토가 있을수 없는 카드에 해당되는지 여부

        if (canNotAuto) {
          orderSummary.content.push({
            name: t('submit-72'),
            ...makeOrderSentenceData(filteredGradingOrderItems),
          });
        } else {
          if (nonAutoList && !_.isEmpty(nonAutoList)) {
            orderSummary.content.push({
              name: t('submit-72'),
              ...makeOrderSentenceData(nonAutoList),
            });
          }

          if (autoList && !_.isEmpty(autoList)) {
            orderSummary.content.push({
              name: t('submit-73'),
              ...makeOrderSentenceData(autoList),
            });
          }
        }

        orderSummaryList.push(orderSummary);
      }
    });
    return orderSummaryList;
  }, [i18n.language, orderItems, t, makeOrderSentenceData]);

  const itemSummary =
    serviceType === 'REHOLDER' ? reholderItemSummary : generalItemSummary;

  return {
    itemSummary,
    priceUnit,
  };
}

export default useItemSummary;
