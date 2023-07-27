import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import MaxWidthLayoutBox from '@/common/components/Layout/MaxWidthLayoutBox';

interface WhyBrgSliderCardProps {
  title: string;
  description: string;
  image: string;
}

function WhyBrgSliderCard({
  title,
  description,
  image,
}: WhyBrgSliderCardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      width={1}
      height="480px"
      display="flex"
      flexDirection="column"
      bgcolor="gray_600"
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <MaxWidthLayoutBox
        width={1}
        height={1}
        paddingBottom="80px"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        paddingX={{ xs: '16px', sm: '32px' }}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          component="h2"
          fontWeight={600}
          color="white"
          marginBottom={{ xs: '8px', sm: '16px' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="white"
          width={{ xs: '300px', sm: '480px' }}
          height={{ xs: '72px', sm: '48px' }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '300px',
          }}
        >
          {description}
        </Typography>
      </MaxWidthLayoutBox>
    </Box>
  );
}

export default WhyBrgSliderCard;
