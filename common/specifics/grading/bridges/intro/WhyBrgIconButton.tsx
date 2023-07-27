import { IconButton } from '@mui/material';
import { ReactNode } from 'react';

interface WhyBrgIconButtonProps {
  children: ReactNode;
  onClick: () => void;
  isActive: boolean;
}

function WhyBrgIconButton({
  children,
  onClick,
  isActive,
}: WhyBrgIconButtonProps) {
  return (
    <IconButton
      onClick={onClick}
      disableRipple
      sx={(theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isActive ? theme.palette.white : 'transparent',
        width: '100%',
        height: '80px',
        cursor: 'pointer',
        fontSize: '48px',
        borderTop: '1px solid rgba(255, 255, 255, 0.24)',
        color: isActive ? theme.palette.secondary_20 : theme.palette.white,
        borderRadius: 0,

        '&:last-of-type': {
          borderBottom: '1px solid rgba(255, 255, 255, 0.24)',
        },
      })}
    >
      {children}
    </IconButton>
  );
}

export default WhyBrgIconButton;
