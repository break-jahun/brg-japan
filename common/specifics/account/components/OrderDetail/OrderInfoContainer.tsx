import { Box, Container } from '@mui/material';

export const OrderInfoContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return children ? (
    <Container maxWidth="sm">
      <Box
        p={2}
        mb={1}
        bgcolor="background.paper"
        width={1}
        boxShadow="5px 5px 10px -5px rgba(0, 0, 0, 0.1) !important"
      >
        {children}
      </Box>
    </Container>
  ) : null;
};
