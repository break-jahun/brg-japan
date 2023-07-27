import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface SignUpDialogProps {
  content: React.ReactElement;
  isOpen: boolean;
  handleCloseWithoutAgreement: () => void;
  handleClickAgreement: () => void;
}

function SignUpDialog({
  content,
  isOpen,
  handleCloseWithoutAgreement,
  handleClickAgreement,
}: SignUpDialogProps) {
  const { t } = useTranslation();
  return (
    <Dialog open={isOpen} scroll="paper">
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={handleCloseWithoutAgreement} color="primary">
          {t('general/close')}
        </Button>
        <Button color="primary" onClick={handleClickAgreement}>
          {t('general/agree')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SignUpDialog;
