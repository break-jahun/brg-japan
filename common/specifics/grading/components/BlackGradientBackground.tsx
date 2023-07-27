import { Box } from '@mui/material';

interface BlackGradientBackgroundProps {
  children: React.ReactNode;
}

function BlackGradientBackground({ children }: BlackGradientBackgroundProps) {
  return (
    <Box
      component="section"
      padding="48px 20px"
      sx={{
        backgroundImage: `linear-gradient(to right, #303235 0%, #070a0f 90%)`,
      }}
    >
      {children}
    </Box>
  );
}

export default BlackGradientBackground;
