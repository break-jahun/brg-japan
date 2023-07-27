import { VStack } from '@/common/components/VStack';
import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface TitledSectionProps {
  title: string;
  children: ReactNode;
}
function TitledSection({ title, children }: TitledSectionProps) {
  return (
    <Box mt={2} mb={1} mx={1}>
      <VStack>
        <Typography variant="body2" fontWeight={700}>
          {title}
        </Typography>
        <Box my={2} padding={1} boxShadow={1} bgcolor="white">
          {children}
        </Box>
      </VStack>
    </Box>
  );
}

export default TitledSection;
