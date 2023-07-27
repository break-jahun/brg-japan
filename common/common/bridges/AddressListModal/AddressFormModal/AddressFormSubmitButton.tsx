import useFormSubmitButtonParser from '@/specifics/grading/modules/hooks/parser/useFormSubmitButtonParser';
import { Box, Button } from '@mui/material';

interface Props {
  onClick: () => void;
}

const AddressFormSubmitButton = ({ onClick }: Props) => {
  const { generalSave } = useFormSubmitButtonParser();

  return (
    <Box display="flex" justifyContent="center" pt={2}>
      <Button
        disableElevation
        color="secondary"
        variant="contained"
        size="small"
        onClick={onClick}
      >
        {generalSave}
      </Button>
    </Box>
  );
};

export default AddressFormSubmitButton;
