import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

interface TitleSectionProps {
  title: string;
  summary: string;
}

function TitleSection({ title, summary }: TitleSectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box marginBottom={isMobile ? '51px' : '55px'}>
      <Typography variant="h4" fontWeight="700" align="center">
        {title}
      </Typography>
      <Typography
        variant={isMobile ? 'body2' : 'body1'}
        marginTop={isMobile ? '10px' : '15px'}
        align="center"
      >
        {summary}
      </Typography>
    </Box>
  );
}
export default TitleSection;
