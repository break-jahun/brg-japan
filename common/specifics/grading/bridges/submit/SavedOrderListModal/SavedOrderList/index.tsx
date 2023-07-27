import { useSavedGradingOrderQuery } from '@/specifics/grading/modules/apihooks/useSavedGradingOrderQuery';
import { Box } from '@mui/material';
import SavedOrderItem from './SavedOrderItem';

export const useSavedOrderListParser = () => {
  const { data } = useSavedGradingOrderQuery();

  const savedGradingOrderList = data?.rows || [];

  return { savedGradingOrderList };
};

interface Props {
  handleClose: () => void;
}

const SavedOrderList = ({ handleClose }: Props) => {
  const { savedGradingOrderList } = useSavedOrderListParser();

  return (
    <Box
      sx={{
        padding: '8px 10px',
        backgroundColor: '#f4f6fa',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '8px',
        marginBottom: '24px',
      }}
    >
      {savedGradingOrderList.map((order) => (
        <SavedOrderItem
          order={order}
          key={order.id}
          handleClose={handleClose}
        />
      ))}
    </Box>
  );
};

export default SavedOrderList;
