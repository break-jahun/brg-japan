import { Box, Dialog } from '@mui/material';
import PhoneAuthModalHeader from './PhoneAuthModalHeader';
import PhoneAuthModalForm from './PhoneAuthModalForm';
import PhoneAuthModalButton from './PhoneAuthModalButton';

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const PhoneNumberAuthenticationModal = ({ isOpen, handleClose }: Props) => {
  return (
    <Dialog open={isOpen}>
      <Box
        sx={{
          padding: 1,
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <PhoneAuthModalHeader />
        <PhoneAuthModalForm handleClose={handleClose} />
        <PhoneAuthModalButton onClick={handleClose} />
      </Box>
    </Dialog>
  );
};

export default PhoneNumberAuthenticationModal;
