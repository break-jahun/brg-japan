import { VStack } from '@/common/components/VStack';
import { Typography, useTheme, useMediaQuery } from '@mui/material';

interface PageGradientBackgroundTitleProps {
  title: string;
  description: string;
}

function PageGradientBackgroundTitle({
  title,
  description,
}: PageGradientBackgroundTitleProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <VStack
      width={1}
      height={isMobile ? '400px' : '300px'}
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="0px 20px"
      sx={{ background: `linear-gradient(83deg, #3f70aa 5%, #512978 95%)` }}
    >
      <Typography
        variant={isMobile ? 'h3' : 'h1'}
        align="center"
        color="white"
        fontWeight={900}
        gutterBottom
      >
        {title}
      </Typography>
      <Typography variant="subtitle1" align="center" color="white">
        {description}
      </Typography>
    </VStack>
  );
}

export default PageGradientBackgroundTitle;
