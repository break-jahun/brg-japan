import { styled, Typography } from '@mui/material';
import { ButtonHTMLAttributes, forwardRef, ReactNode, RefObject } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: string;
  bgcolor?: string;
}

const CallToActionButton = forwardRef(
  ({ children, bgcolor, color, ...rest }: Props, ref) => {
    return (
      <Button
        ref={ref as RefObject<HTMLButtonElement>}
        color={color || '#161953'}
        bgcolor={bgcolor || '#ffffff'}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);

export default CallToActionButton;

interface StyleProps {
  bgcolor: string;
  color: string;
}

const Button = styled('button')<StyleProps>(({ theme, bgcolor, color }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color,
  backgroundColor: bgcolor,
  borderRadius: '4px',
  padding: '10px 32px',
  width: 'fit-content',
}));
