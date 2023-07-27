import useItemSummary from '@/common/modules/hooks/useItemSummary';
import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';
import { ServiceType } from '@/common/types/serviceOrder/serviceOrder';
import useAmountTableBodyParser from '@/specifics/grading/modules/hooks/parser/useAmountTableBodyParser';
import { Box, Typography, styled } from '@mui/material';
import { Fragment } from 'react';

interface Props {
  order: GradingOrderAttributes;
  serviceType: ServiceType;
}

const AmountTableBody = ({ order, serviceType }: Props) => {
  const {
    discountPrice,
    deliveryCharge,
    deliveryCost,
    localeDiscountPrice,
    sum,
    totalAmount,
    getItemText,
    getItemPrice,
  } = useAmountTableBodyParser(order);

  const { itemSummary } = useItemSummary({
    orderItems: order.gradingOrderItems,
    serviceType,
  });

  return (
    <Box p={1}>
      {itemSummary.map((summary) => (
        <Fragment key={summary.name}>
          <Box my={1}>
            <Typography variant="body2" fontWeight={700}>
              [{summary.name}]
            </Typography>
          </Box>
          {summary.content.map((content) => (
            <TableRow key={content.name}>
              <Typography variant="body2">{getItemText(content)}</Typography>
              <Typography variant="body2">{getItemPrice(content)}</Typography>
            </TableRow>
          ))}
        </Fragment>
      ))}
      {!!order.discountPrice && (
        <TableRow>
          <Typography variant="body2" color="red">
            {discountPrice}
          </Typography>
          <Typography variant="body2" color="red">
            {localeDiscountPrice}
          </Typography>
        </TableRow>
      )}
      <TableRow>
        <Typography variant="body2">{deliveryCharge}</Typography>
        <Typography variant="body2">{deliveryCost}</Typography>
      </TableRow>
      <TableRow>
        <Typography variant="body1" fontWeight={700}>
          {sum}
        </Typography>
        <Typography variant="body1" fontWeight={700}>
          {totalAmount}
        </Typography>
      </TableRow>
    </Box>
  );
};

export default AmountTableBody;

const TableRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '8px 0',
});
