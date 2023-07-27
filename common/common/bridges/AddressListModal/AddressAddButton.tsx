import useAddressAddButtonParser from '@/specifics/grading/modules/hooks/parser/useAddressAddButtonParser';
import { Box, Button } from '@mui/material';

interface Props {
  onClick: () => void;
}

const AddressAddButton = ({ onClick }: Props) => {
  const { addShippingDestination } = useAddressAddButtonParser();

  return (
    <Box m={1} alignItems="center" display="flex">
      <Button
        sx={{
          backgroundColor: '#eeeeee',
          fontSize: '0.8rem',
          color: '#0194fe',
        }}
        fullWidth
        onClick={onClick}
      >
        {addShippingDestination}
      </Button>
    </Box>
  );
};

export default AddressAddButton;
