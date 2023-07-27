import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography, ClickAwayListener, styled } from '@mui/material';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Button, { buttonClasses } from '@mui/material/Button';
import useOpen from '@/common/modules/hooks/useOpen';

function AutoGradeTooltip() {
  const { open: isOpen, handleClose: onClose, handleOpen } = useOpen();
  const [isClick, setIsClick] = useState(false);

  const handleClose = useCallback(() => {
    onClose();
    setIsClick(false);
  }, [onClose]);

  const handleMouseLeave = useCallback(() => {
    if (!isClick) {
      handleClose();
    }
  }, [handleClose, isClick]);

  const handleClick = useCallback(() => {
    handleOpen();
    setIsClick(true);
  }, [handleOpen]);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Box>
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
        >
          <ToolTipButton
            onClick={handleClick}
            onMouseOver={handleOpen}
            onMouseLeave={handleMouseLeave}
          >
            !
          </ToolTipButton>
        </LightTooltip>
      </Box>
    </ClickAwayListener>
  );
}

export default AutoGradeTooltip;

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.white,
    color: 'black',
    boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.14)',
    padding: 0,
    maxWidth: '350px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '650px',
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
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white,
    fontWeight: '700',
  },
  [`&.${buttonClasses.root}:hover`]: {
    backgroundColor: theme.palette.primary.main,
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
        {t('grading/main/tooltip-02')}
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
