import { Typography, styled } from '@mui/material';
import { VStack } from '@/common/components/VStack';
import { HStack } from '@/common/components/HStack';
import useItemSummary from '@/common/modules/hooks/useItemSummary';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import {
  gradingOrderItemsState,
  serviceTypeState,
  totalPriceState,
} from '@/common/modules/recoil/gradingOrder';
import useOrderItemListParser from '@/specifics/grading/modules/hooks/parser/useOrderItemListParser';
import OrderItem from './OrderItem';

function OrderItemList() {
  const { t } = useTranslation();
  const { parseOrderItemListTotalPrice, parsedOrderItemListPricePrefix } =
    useOrderItemListParser();
  const items = useRecoilValue(gradingOrderItemsState);

  const serviceType = useRecoilValue(serviceTypeState);
  const { itemSummary, priceUnit } = useItemSummary({
    orderItems: items,
    serviceType,
  });
  const totalPrice = useRecoilValue(totalPriceState);

  return (
    <VStack
      padding="8px 20px"
      border="1px solid black"
      sx={{
        gridArea: 'summary',
        border: '1px solid rgb(238, 238, 238)',
        flexGrow: 1,
      }}
    >
      <HStack justifyContent="center" mb={2}>
        <Title variant="body1">{t('submit-69')}</Title>
      </HStack>
      <VStack overflow="auto" width="fit-content" padding={2}>
        {itemSummary.map((summary) => (
          <OrderItem key={summary.name} summary={summary} />
        ))}
      </VStack>
      <HStack marginTop="auto" marginLeft="auto">
        <Title variant="body1" letterSpacing={1.5}>
          {parsedOrderItemListPricePrefix}
          <Typography
            component="span"
            sx={{
              fontWeight: 800,
              fontSize: 30,
              ml: '5px',
            }}
          >
            {`${parseOrderItemListTotalPrice(totalPrice, priceUnit)}`}
          </Typography>
        </Title>
      </HStack>
    </VStack>
  );
}

export default OrderItemList;

const Title = styled(Typography)({
  fontWeight: 700,
});
