import { Box, BoxProps } from '@mui/material';

type Props = {
  children: React.ReactNode;
} & BoxProps;

function SharedContainer(props: Props) {
  const { children, ...rest } = props;

  return (
    <Box paddingTop="68px" minHeight="100vh" {...rest}>
      {children}
    </Box>
  );
}

export default SharedContainer;
