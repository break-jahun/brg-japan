import { Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useAddressListModalHeaderParser from '@/specifics/grading/modules/hooks/parser/useAddressListModalHeaderParser';

interface Props {
  handleClose: () => void;
}

const AddressListModalHeader = ({ handleClose }: Props) => {
  const { manageShippingDestination } = useAddressListModalHeaderParser();

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography variant="h6" align="center" fontWeight={700}>
        {manageShippingDestination}
      </Typography>
    </Box>
  );
};

export default AddressListModalHeader;
