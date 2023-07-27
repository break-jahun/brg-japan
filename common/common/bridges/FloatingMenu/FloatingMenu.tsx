import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import {
  speedDialClasses,
  styled,
  speedDialActionClasses,
} from '@mui/material';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction, {
  SpeedDialActionProps,
} from '@mui/material/SpeedDialAction';
import useOpen from '@/common/modules/hooks/useOpen';
import { useState } from 'react';

interface FloatingMenuProps {
  data: {
    icon: React.ReactNode;
    name: string;
    onClick: () => void;
  }[];
}

function FloatingMenu({ data }: FloatingMenuProps) {
  const { open: isOpen, handleOpen, handleClose } = useOpen();

  const handleClick = (clickAction: () => void) => {
    clickAction();
    handleClose();
  };

  return (
    <FloatingMenuWrapper>
      <SpeedDial
        ariaLabel="floating menu"
        sx={{ position: 'fixed', bottom: 25, right: 25 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={isOpen}
      >
        {data.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClick(action.onClick)}
            tooltipOpen
          />
        ))}
      </SpeedDial>
    </FloatingMenuWrapper>
  );
}

const FloatingMenuWrapper = styled(Box)({
  [`& .${speedDialActionClasses.fab}`]: {
    backgroundColor: '#171c61',
    svg: {
      fill: 'white',
    },
    ':hover': {
      backgroundColor: 'white',
      svg: {
        fill: '#171c61',
      },
    },
  },
  [`& .${speedDialActionClasses.staticTooltipLabel}`]: {
    fontWeight: 'bold',
    boxShadow: 'none',
    fontSize: '14px',
    backgroundColor: 'rgba(255,255,255,60%)',
    color: '#171c61',
    whiteSpace: 'nowrap',
    minWidth: 90,
  },
});

export default FloatingMenu;
