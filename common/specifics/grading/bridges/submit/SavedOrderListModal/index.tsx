import Close from '@mui/icons-material/Close';
import { Box, Button, IconButton, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SavedOrderList from './SavedOrderList';

interface Props {
  handleClose: () => void;
}

const SavedOrderListModal = ({ handleClose }: Props) => {
  const { t } = useTranslation();

  return (
    <ModalContainer>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          padding: '8px',
        }}
      >
        <IconButton
          sx={{
            padding: 0,
          }}
          aria-label="close"
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      </Box>
      <Box mb="10px">
        <Typography variant="h6" fontWeight={700}>
          {t('temporary-storage/list')}
        </Typography>
      </Box>
      <SavedOrderList handleClose={handleClose} />
      <Box sx={{ my: '8px' }}>
        <Button color="secondary" variant="contained" onClick={handleClose}>
          {t('general/close')}
        </Button>
      </Box>
    </ModalContainer>
  );
};

export default SavedOrderListModal;

const ModalContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
