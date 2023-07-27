import { Typography } from '@mui/material';
import { OrderSummary } from '@/common/modules/hooks/useItemSummary';
import useOrderItemParser from '@/specifics/grading/modules/hooks/parser/useOrderItemParser';

interface Props {
  summary: OrderSummary;
}

const OrderItem = ({ summary }: Props) => {
  const { parseOrderItemContent, parseOrderItemTitle } = useOrderItemParser();

  return (
    <>
      <Typography fontWeight="700" variant="body1">
        {parseOrderItemTitle(summary.name)}
      </Typography>
      {summary.content.map((content) => (
        <Typography key={content.name}>
          {parseOrderItemContent(content)}
        </Typography>
      ))}
    </>
  );
};

export default OrderItem;
