import { Button, Typography } from '@mui/material';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { useTranslation } from 'react-i18next';

interface ProcessDetailButtonProps {
  isOpen: boolean;
  handleToggleProcessDetailClick: () => void;
}

function ProcessDetailButton({
  isOpen,
  handleToggleProcessDetailClick,
}: ProcessDetailButtonProps) {
  const { t } = useTranslation();

  return (
    <Button
      disableRipple
      sx={{
        color: 'black',
        marginTop: { xs: '32px', sm: '48px' },
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      }}
      onClick={handleToggleProcessDetailClick}
    >
      <Typography variant="button" textAlign="center">
        {t('프로세스디테일버튼')}
      </Typography>
      {isOpen ? <ExpandLessRoundedIcon /> : <ExpandMoreRoundedIcon />}
    </Button>
  );
}

export default ProcessDetailButton;
