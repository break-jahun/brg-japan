import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Typography,
  ClickAwayListener,
  styled,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Button, { buttonClasses } from '@mui/material/Button';
import useOpen from '@/common/modules/hooks/useOpen';

function QrTooltip() {
  const { open: isOpen, handleClose, handleOpen } = useOpen();
  const [isClick, setIsClick] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box
        position="absolute"
        right={{ xs: '18%', sm: '85px' }}
        top={{ xs: '34%', sm: '460px' }}
      >
        <LightTooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleClose}
          open={isOpen}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={<TitleInTooltip handleClose={handleClose} />}
          describeChild
          placement={isMobile ? 'bottom-end' : 'bottom'}
        >
          <ToolTipButton
            onClick={() => {
              handleOpen();
              setIsClick((prev) => !prev);
            }}
            onMouseOver={() => {
              if (isClick) {
                setIsClick((prev) => !prev);
                handleOpen();
              } else {
                handleOpen();
              }
            }}
            onMouseLeave={isClick ? handleOpen : handleClose}
          >
            !
          </ToolTipButton>
        </LightTooltip>
      </Box>
    </ClickAwayListener>
  );
}

export default QrTooltip;

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.white,
    color: 'black',
    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.14)',
    padding: 0,
    width: '250px',
    maxWidth: '250px',
    [theme.breakpoints.up('sm')]: {
      width: '350px',
    },
  },
}));

const ToolTipButton = styled(Button)(({ theme }) => ({
  [`&.${buttonClasses.root}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 'auto',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    lineHeight: '20px',
    backgroundColor: '#fff651',
    color: theme.palette.black,
    fontWeight: '700',
  },
  [`&.${buttonClasses.root}:hover`]: {
    backgroundColor: '#fff651',
  },
}));

interface TitleInTooltipProps {
  handleClose: () => void;
}

const TitleInTooltip = ({ handleClose }: TitleInTooltipProps) => {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      padding="14px 10px 8px 16px"
      borderRadius="4px"
    >
      <Typography variant="body2" sx={{ wordBreak: 'keep-all' }}>
        {t('grading/main/tooltip-01')}
      </Typography>
      <Button
        sx={{ padding: '8px', alignSelf: 'flex-end' }}
        onClick={handleClose}
      >
        <Typography variant="body2" color="primary.dark">
          {t('grading/main/tooltip-close')}
        </Typography>
      </Button>
    </Box>
  );
};
