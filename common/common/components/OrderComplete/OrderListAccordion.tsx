import useItemSummary, {
  OrderSummary,
} from '@/common/modules/hooks/useItemSummary';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
} from '@mui/material';

interface OrderListAccordionProps {
  orderList: string;
  quantity: string;
  itemSummary: OrderSummary[];
  getItemSummary: (
    summaryName: string,
    contentName: string,
    contentQt: string
  ) => string;
}

const OrderListAccordion = (props: OrderListAccordionProps) => {
  const { orderList, quantity, itemSummary, getItemSummary } = props;

  return (
    <Box mb={1}>
      <Accordion sx={{ boxShadow: 'unset' }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            px: 1,
          }}
        >
          <Typography variant="body2" fontWeight={700}>
            {orderList}
          </Typography>
          <Typography variant="body2" sx={{ ml: 3 }} fontWeight={700}>
            {quantity}
          </Typography>
        </AccordionSummary>
        <StyledAccordionDetails>
          {itemSummary.map((summary) =>
            summary.content.map((content) => (
              <Typography
                key={content.name}
                sx={(theme) => ({
                  marginLeft: 1,
                  [theme.breakpoints.up('sm')]: {
                    marginLeft: 2,
                  },
                })}
                variant="body2"
              >
                {getItemSummary(summary.name, content.name, content.quantity)}
              </Typography>
            ))
          )}
        </StyledAccordionDetails>
      </Accordion>
    </Box>
  );
};

export default OrderListAccordion;

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  width: '70%',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  padding: '0 0 20px 0',

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    padding: 0,
  },
}));
