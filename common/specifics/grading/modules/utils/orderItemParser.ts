import { OrderContent } from '@/common/modules/hooks/useItemSummary';

export const parseOrderItemTitle = (name: string) => `[${name}]`;

export const parseOrderItemContent = (content: OrderContent) =>
  `${content.name} : ${content.quantity} X ${content.price} = ${content.sum} ${content.unit}`;
