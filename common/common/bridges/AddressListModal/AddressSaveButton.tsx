import useAddressSaveButtonParser from '@/specifics/grading/modules/hooks/parser/useAddressSaveButtonParser';
import { Box, Typography, Button } from '@mui/material';

interface Props {
  onClick: () => void;
}

const AddressSaveButton = ({ onClick }: Props) => {
  const { changeSelected, generalSave } = useAddressSaveButtonParser();

  return (
    <Box
      pt={2}
      m={1}
      alignItems="center"
      display="flex"
      justifyContent="flex-end"
    >
      <Box display="flex" alignItems="center">
        <Typography variant="caption">{changeSelected}</Typography>
        <Button
          disableElevation
          color="secondary"
          variant="contained"
          size="small"
          sx={{
            fontSize: '0.6rem',
            marginLeft: '4px',
          }}
          onClick={onClick}
        >
          {generalSave}
        </Button>
      </Box>
    </Box>
  );
};

export default AddressSaveButton;
