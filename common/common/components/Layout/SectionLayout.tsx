import { Box, SxProps } from '@mui/material';
import { ReactChild, ReactNode } from 'react';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';

interface SectionLayoutProps {
  bgColor?: string;
  children: ReactNode;
}

function SectionLayout({
  bgColor,
  children,
  sx,
}: SectionLayoutProps & { sx?: SxProps }) {
  return (
    <Box
      width={1}
      paddingTop={{ xs: '80px', sm: '160px' }}
      bgcolor={bgColor || 'white'}
      component="section"
      sx={{
        ...sx,
      }}
    >
      <MaxWidthLayoutBox>{children}</MaxWidthLayoutBox>
    </Box>
  );
}

export default SectionLayout;
