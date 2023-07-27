export const parseOrderItemListTotalPrice = (price: number, unit: string) =>
  `${price.toLocaleString()} ${unit}`;
