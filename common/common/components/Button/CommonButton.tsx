import { Button, ButtonProps, styled, Typography } from '@mui/material';
import { SxProps } from '@mui/material/styles';
import React, { ReactNode } from 'react';

interface CommonButtonProps extends ButtonProps {
  buttonType?: string;
  sx?: SxProps;
}

function CommonButton({
  buttonType = 'DEFAULT',
  sx = [],
  children,
  ...rest
}: CommonButtonProps) {
  if (buttonType === 'GRAY') {
    return (
      <Button
        sx={{
          color: 'black',
          backgroundColor: 'gray_100',
          padding: '0',
          borderRadius: '3px',
          height: '28px',
        }}
        {...rest}
      >
        <Typography variant="overline">{children}</Typography>
      </Button>
    );
  }
  if (buttonType === 'OUTLINED') {
    return (
      <Button
        sx={{
          border: '1px solid #e9e9e9',
          color: 'black',
          padding: '0',
          borderRadius: '3px',
          height: '28px',
        }}
        {...rest}
      >
        <Typography variant="overline">{children}</Typography>
      </Button>
    );
  }

  if (buttonType === 'TEXT') {
    const { disabled } = rest;
    return (
      <Button
        sx={{
          color: 'black',
          padding: '0',
          borderRadius: '3px',
          height: '28px',
          bgcolor: disabled ? 'gray_300' : 'none',
        }}
        {...rest}
      >
        <Typography variant="overline">{children}</Typography>
      </Button>
    );
  }
  return (
    <StyledCommonButton sx={[...(Array.isArray(sx) ? sx : [sx])]} {...rest}>
      <Text>{children}</Text>
    </StyledCommonButton>
  );
}

interface StyleProps {
  disabled?: boolean;
}

const StyledCommonButton = styled(Button)(({ disabled }: StyleProps) => ({
  borderRadius: 50,
  color: 'white',
  boxShadow: '5px 5px 10px -5px rgb(0 0 0 / 10%)',
  backgroundColor: disabled ? '#eee' : 'initial',
  backgroundImage: disabled
    ? 'none'
    : 'linear-gradient(to right, #6c35bd 0%, #5e8bc2 100%)',
  fontWeight: 800,
  letterSpacing: 2,
  padding: '10px 0px',
}));

const Text = styled('span')({});
export default CommonButton;
