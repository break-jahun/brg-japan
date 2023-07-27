import usePhoneAuthModalButtonParser from '@/specifics/auth/modules/hooks/parser/usePhoneAuthModalButtonParser';
import { Box, Button } from '@mui/material';

interface Props {
  onClick: () => void;
}

const PhoneAuthModalButton = ({ onClick }: Props) => {
  const { generalClose } = usePhoneAuthModalButtonParser();

  return (
    <Box m={1} pt={1} display="flex" justifyContent="center">
      <Button
        variant="contained"
        disableElevation
        onClick={onClick}
        color="inherit"
      >
        {generalClose}
      </Button>
    </Box>
  );
};

export default PhoneAuthModalButton;
