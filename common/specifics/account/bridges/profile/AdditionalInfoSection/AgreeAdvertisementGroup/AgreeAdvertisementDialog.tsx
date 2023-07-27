import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { AgreeAdvertisement } from '@/common/components/AgreeAdvertisement';
import { useTranslation } from 'react-i18next';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAgreement: () => void;
}

const AgreeAdvertisementDialog = ({ isOpen, onClose, onAgreement }: Props) => {
  const { t } = useTranslation();

  return (
    <Dialog open={isOpen} onClose={onClose} scroll="paper">
      <DialogContent
        sx={{ padding: '16px', marginTop: { xs: '-64px', sm: '-104px' } }}
      >
        <AgreeAdvertisement />
      </DialogContent>
      <DialogActions>
        <ActionButton onClick={onClose} text={t('terms-4')} />
        <ActionButton onClick={onAgreement} text={t('terms-5')} />
      </DialogActions>
    </Dialog>
  );
};

export default AgreeAdvertisementDialog;

const ActionButton = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: 'secondary_20',
        ':hover': {
          backgroundColor: '#1976d20a',
        },
      }}
    >
      {text}
    </Button>
  );
};
