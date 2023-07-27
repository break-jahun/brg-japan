import { GradingOrderAttributes } from '@/common/types/grading/gradingOrder';
import SavedDate from '@/specifics/grading/bridges/submit/SavedOrderListModal/SavedOrderList/SavedOrderItem/SavedDate';
import SavedOrderItemButtonGroup from '@/specifics/grading/bridges/submit/SavedOrderListModal/SavedOrderList/SavedOrderItem/SavedOrderItemButtonGroup';
import SavedOrderItemCountText from '@/specifics/grading/bridges/submit/SavedOrderListModal/SavedOrderList/SavedOrderItem/SavedOrderItemCountText';
import { Box } from '@mui/material';

interface Props {
  order: GradingOrderAttributes;
  handleClose: () => void;
}

const SavedOrderItem = ({ order, handleClose }: Props) => {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        padding: '10px 15px',
        backgroundColor: '#fff',
        boxShadow: '5px 5px 5px -5px rgb(0 0 0 / 10%)',
        flexDirection: 'column',
        rowGap: '20px',
        [theme.breakpoints.up('sm')]: {
          padding: '20px 30px',
          flexDirection: 'row',
          rowGap: '0',
        },
      })}
    >
      <SavedDate updatedAt={order.updatedAt} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: { xs: '100%', sm: 'auto' },
          justifyContent: {
            xs: 'space-between',
            sm: 'flex-start',
          },
        }}
      >
        {order.gradingOrderItems && (
          <SavedOrderItemCountText
            gradingOrderItems={order.gradingOrderItems}
          />
        )}
        <SavedOrderItemButtonGroup order={order} handleClose={handleClose} />
      </Box>
    </Box>
  );
};

export default SavedOrderItem;
