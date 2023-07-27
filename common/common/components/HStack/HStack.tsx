import Stack, { StackProps } from '@mui/material/Stack';
import { ReactNode } from 'react';

interface HStackProps extends StackProps {
  children: ReactNode;
}
function HStack({ children, ...props }: HStackProps) {
  return (
    <Stack {...props} direction="row">
      {children}
    </Stack>
  );
}
export default HStack;
