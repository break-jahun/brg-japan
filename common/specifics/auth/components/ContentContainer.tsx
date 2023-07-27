import { VStack } from '@/common/components/VStack';
import { Box, Typography } from '@mui/material';

interface ContentContainerProps {
  children: React.ReactNode;
}

function ContentContainer({ children }: ContentContainerProps) {
  return (
    <Box
      minHeight="calc(100vh - 64px)"
      display="flex"
      flexDirection="column"
      alignItems={{ xs: 'baseline', sm: 'center' }}
      justifyContent="center"
    >
      <VStack
        width={1}
        maxWidth="400px"
        display="flex"
        alignItems="center"
        justifyContent={{ xs: 'center', sm: 'space-around' }}
        minHeight={{ xs: 'calc(80vh - 50px)', sm: 'auto' }}
        padding={{ xs: '16px', sm: '32px' }}
        bgcolor="white"
      >
        {children}
      </VStack>
      <Typography
        color="white"
        variant="caption"
        fontWeight={700}
        sx={{ marginTop: '8px', marginBottom: '24px' }}
      >
        © Break & Company 2022.
      </Typography>
    </Box>
  );
}

export default ContentContainer;
