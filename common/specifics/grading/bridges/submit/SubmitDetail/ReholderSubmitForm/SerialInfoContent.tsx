import {
  Button,
  DialogActions,
  DialogContent,
  styled,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

interface SerialInfoContentProps {
  onSave: () => void;
  onClose: () => void;
  serial: string;
  data?: string;
}

function SerialInfoContent(props: SerialInfoContentProps) {
  const { onSave, onClose, serial, data } = props;
  const { t } = useTranslation();

  return (
    <>
      <DialogContent>
        <Typography variant="h6">{t('다음카드추가')}</Typography>
        <Typography variant="body1" sx={{ marginTop: '8px' }} fontWeight={600}>
          {serial}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: '20px' }}>
          {data}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: '#6034b0' }} onClick={onClose}>
          {t('general/cancel-word')}
        </Button>
        <ConfirmButton onClick={onSave}>{t('general/accept')}</ConfirmButton>
      </DialogActions>
    </>
  );
}

const ConfirmButton = styled(Button)({
  backgroundColor: '#6034B0',
  color: 'white',
  ':hover': {
    backgroundColor: '#6034B0',
  },
});

export default SerialInfoContent;
