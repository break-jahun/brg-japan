import Close from '@mui/icons-material/Close';
import { Box, Typography, IconButton } from '@mui/material';

interface Props {
  handleClose: () => void;
  title: string;
}

const AddressFormModalHeader = ({ handleClose, title }: Props) => {
  return (
    <Box>
      <Box display="flex" justifyContent="flex-end">
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      </Box>
      <Typography variant="body2">{title}</Typography>
    </Box>
  );
};

export default AddressFormModalHeader;
