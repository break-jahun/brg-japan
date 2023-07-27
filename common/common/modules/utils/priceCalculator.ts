import { CostPolicy } from '@/common/types/cost/costPolicy';
import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';
import { GradingOrderItemAttributes } from '@/common/types/grading/gradingOrderItem';
import { Membership } from '@/common/types/user/memberShip';

interface PriceCalculatorProps {
  gradingOrder: GradingOrderAttributes;
  costPolicy: CostPolicy;
  memberShip: Membership;
}

class PriceCalculator {
  gradingOrder: GradingOrderAttributes;

  costPolicy: CostPolicy;

  memberShip: Membership;

  regularAmount: number;

  expressAmount: number;

  constructor({ gradingOrder, costPolicy, memberShip }: PriceCalculatorProps) {
    this.gradingOrder = gradingOrder;
    this.costPolicy = costPolicy;
    this.memberShip = memberShip;

    const regularAmount =
      this.costPolicy.productService.find((item) => item.serviceName === 'REG')
        ?.amount ?? 0;
    const expressAmount =
      this.costPolicy.productService.find((item) => item.serviceName === 'EXP')
        ?.amount ?? 0;

    this.regularAmount = regularAmount;
    this.expressAmount = expressAmount;
  }

  getTotalPrice(): number {
    return this.gradingOrder.totalPrice;
  }

  /**
   * @remarks REG 와 EXP 의 차이금액
   */
  getDifferentCost(): number {
    return Math.abs(this.expressAmount - this.regularAmount);
  }

  calculateQt(): void {
    this.gradingOrder.totalQt = this.gradingOrder?.gradingOrderItems
      ? this.gradingOrder.gradingOrderItems.length
      : 0;
  }

  calculateTotalPrice(): void {
    let totalPrice = 0;

    const newGradingOrderItems: GradingOrderItemAttributes[] = [];

    if (this.gradingOrder?.gradingOrderItems) {
      this.gradingOrder.gradingOrderItems.forEach((gradingOrderItem) => {
        let price =
          this.costPolicy.productCardCategory.find(
            (item) => item.category === gradingOrderItem.cardCategory
          )?.amount ?? 0;

        // REGULAR, EXPRESS 에 대한 추가금액을 합산합니다.
        let additionalOrderTypePrice =
          this.costPolicy.productService.find(
            (item) => item.serviceName === this.gradingOrder.gradingOrderType
          )?.amount ?? 0;

        // VIP 인 경우 할인율을 적용합니다.
        // BULK 는 할인율이 적용되지 않습니다.
        if (
          this.gradingOrder.gradingOrderType !== 'BULK' &&
          this.memberShip?.membership?.discountRate
        ) {
          additionalOrderTypePrice *=
            1 - this.memberShip.membership.discountRate;
        }

        price += additionalOrderTypePrice;

        // 오토일 경우 추가금액을 합산합니다.
        if (gradingOrderItem?.isAuto) {
          const additionalAutoPrice = 3000;
          price += additionalAutoPrice;
        }

        newGradingOrderItems.push({
          ...gradingOrderItem,
          price,
          amount: price,
        });
        totalPrice += price;
      });
    }

    this.gradingOrder.totalPrice = totalPrice;
    this.gradingOrder.totalAmount = totalPrice + this.gradingOrder.deliveryCost;
    this.gradingOrder.gradingOrderItems = newGradingOrderItems;
  }

  calculatePrice(): void {
    this.calculateTotalPrice();
  }

  calculate(): GradingOrderAttributes {
    this.calculateQt();
    this.calculatePrice();
    return { ...this.gradingOrder };
  }
}

export default PriceCalculator;
