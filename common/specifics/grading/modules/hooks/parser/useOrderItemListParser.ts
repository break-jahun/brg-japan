import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const useOrderItemListParser = () => {
  const { t } = useTranslation();

  const parseOrderItemListTotalPrice = useCallback(
    (price: number, unit: string) => `${price.toLocaleString()} ${unit}`,
    []
  );

  const parsedOrderItemListPricePrefix = useMemo(() => t('submit-70'), [t]);

  return {
    parseOrderItemListTotalPrice,
    parsedOrderItemListPricePrefix,
  };
};

export default useOrderItemListParser;
