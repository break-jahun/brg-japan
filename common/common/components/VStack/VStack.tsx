import Stack, { StackProps } from '@mui/material/Stack';
import { ReactNode } from 'react';

interface VStackProps extends StackProps {
  children: ReactNode;
}
function VStack({ children, ...props }: VStackProps) {
  return (
    <Stack {...props} direction="column">
      {children}
    </Stack>
  );
}
export default VStack;
