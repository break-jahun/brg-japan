import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';
import { ProductOrderAttributes } from '@/common/types/product/productOrder';
import { ReholderOrderAttributes } from '@/common/types/reholderOrder/reholderOrder';
import { ServiceOrderDetailProps } from '@/common/types/serviceOrder/serviceOrder';
import { initAddress } from '@/common/types/user/address';

export function getOrderDetailOfGradingOrder(
  order: GradingOrderAttributes
): ServiceOrderDetailProps | undefined {
  if (!order) return undefined;

  return {
    id: order.id,
    serviceOrderProcessingStatus: order.gradingOrderProcessingStatus,
    serviceOrderStatus: order.gradingOrderStatus,
    serviceOrderType: order.gradingOrderType,
    serviceOrderItems: order.gradingOrderItems,
    shippingStartDate: order.shippingStartDate,
    shippingCompleteDate: order.shippingCompleteDate,
    estimatedServiceCompleteDate: order.estimatedGradingCompleteDate,
    address: {
      ...initAddress,
      address: order.receiverAddress ?? '',
      memo: order.receiverMemo ?? '',
      name: order.receiverName ?? '',
      phone: order.receiverPhone ?? '',
      title: order.receiverTitle ?? '',
    },
    merchant_uid: order.merchant_uid,
    paymentMethod: order.paymentMethod,
    payment: order.payment,
    totalPrice: order.totalPrice,
    deliveryCost: order.deliveryCost,
    deliveryComIn: order.deliveryComIn,
    trackingNumIn: order.trackingNumIn,
    deliveryComOut: order.deliveryComOut,
    trackingNumOut: order.trackingNumOut,
    totalQt: order.totalQt,
    createdAt: order.createdAt,
    serviceCompleteDate: order.gradingCompleteDate,
    totalAmount: order.totalAmount,
    boxIn: order.boxIn || undefined,
    boxOut: order.boxOut || undefined,
    supportRegion: order.supportRegion?.region || 'KR',
    discountPrice: order.discountPrice,
    deliveryDiscountAmount: order.deliveryDiscountAmount,
  };
}

export function getOrderDetailOfReholderOrder(
  order: ReholderOrderAttributes
): ServiceOrderDetailProps | undefined {
  if (!order) return undefined;
  return {
    id: order.id,
    serviceOrderProcessingStatus: order.reholderOrderProcessingStatus,
    serviceOrderStatus: order.reholderOrderStatus,
    serviceOrderType: 'REHOLDER',
    serviceOrderItems: order.reholderOrderItems?.map((item) => ({
      ...item.gradingOrderItemDetail,
      amount: item.amount,
    })),
    shippingStartDate: order.shippingStartDate,
    shippingCompleteDate: order.shippingCompleteDate,
    estimatedServiceCompleteDate: order.estimatedReholderCompleteDate,
    address: {
      ...initAddress,
      address: order.receiverAddress ?? '',
      memo: order.receiverMemo ?? '',
      name: order.receiverName ?? '',
      phone: order.receiverPhone ?? '',
      title: order.receiverTitle ?? '',
    },
    paymentMethod: order.paymentMethod,
    payment: order.payment,
    totalPrice: order.totalPrice,
    deliveryCost: order.deliveryCost,
    deliveryComIn: order.deliveryComIn,
    trackingNumIn: order.trackingNumIn,
    deliveryComOut: order.deliveryComOut,
    trackingNumOut: order.trackingNumOut,
    totalQt: order.totalQt,
    createdAt: order.createdAt,
    serviceCompleteDate: order.reholderCompleteDate,
    totalAmount: order.totalAmount,
  };
}

export function getOrderDetailOfProductOrder(
  order: ProductOrderAttributes
): ServiceOrderDetailProps | undefined {
  if (!order) return undefined;
  return {
    id: order.id,
    serviceOrderStatus: order.productOrderStatus,
    address: order.address,
    paymentMethod: order.paymentMethod,
    payment: order.payment,
    totalPrice: order.totalPrice,
    deliveryCost: order.deliveryCost,
    deliveryComOut: order.deliveryCom,
    trackingNumOut: order.trackingNum,
    totalQt: order.qt,
    product: order.product,
    createdAt: order.createdAt,
  };
}
