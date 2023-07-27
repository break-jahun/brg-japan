import { OrderContent } from '@/common/modules/hooks/useItemSummary';

const useOrderItemParser = () => {
  const parseOrderItemTitle = (name: string) => `[${name}]`;

  const parseOrderItemContent = (content: OrderContent) =>
    `${content.name} : ${content.quantity} X ${content.price} = ${content.sum} ${content.unit}`;

  return {
    parseOrderItemTitle,
    parseOrderItemContent,
  };
};

export default useOrderItemParser;
