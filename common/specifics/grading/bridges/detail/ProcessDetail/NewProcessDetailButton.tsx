import { Button, Typography } from '@mui/material';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { useTranslation } from 'react-i18next';

interface ProcessDetailButtonProps {
  isOpen: boolean;
  handleToggleProcessDetailClick: () => void;
}

function NewProcessDetailButton({
  isOpen,
  handleToggleProcessDetailClick,
}: ProcessDetailButtonProps) {
  const { t } = useTranslation();

  return (
    <Button
      disableRipple
      sx={{
        color: 'black',
        margin: { xs: '32px 0 64px', sm: '48px 0 80px' },
        padding: '17px 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        borderRadius: '100px',
      }}
      onClick={handleToggleProcessDetailClick}
    >
      <Typography variant="button" textAlign="center">
        {t('detail-17')}
      </Typography>
      {isOpen ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
    </Button>
  );
}

export default NewProcessDetailButton;
