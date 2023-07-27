import {
  Typography,
  IconButton,
  Tooltip,
  ClickAwayListener,
  styled,
  SxProps,
} from '@mui/material';
import { HStack } from '@/common/components/HStack';
import ErrorIcon from '@mui/icons-material/Error';
import { useState } from 'react';

interface Props {
  label: string;
  title: JSX.Element;
  sx?: SxProps;
}

const SizeInformationTooltip = ({ label, title, sx }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <HStack alignItems="center" sx={sx}>
      <Caption variant="body2">{label}</Caption>
      <ClickAwayListener onClickAway={handleClose}>
        <Tooltip
          open={isOpen}
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleClose}
          onMouseOver={handleOpen}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={title}
        >
          <StyledIconButton onClick={handleOpen}>
            <ErrorIcon sx={{ color: '#304ffe' }} />
          </StyledIconButton>
        </Tooltip>
      </ClickAwayListener>
    </HStack>
  );
};

export default SizeInformationTooltip;

const BaseText = styled(Typography)({
  fontWeight: 700,
});

const Caption = styled(BaseText)({
  color: '#304ffe',
});

const StyledIconButton = styled(IconButton)({
  padding: 0,
  marginLeft: 4,
});
