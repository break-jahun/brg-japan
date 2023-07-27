import {
  Box,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

interface HomeSectionTitleProps {
  title: string;
  sx?: SxProps;
}

function HomeSectionTitle({ title, sx }: HomeSectionTitleProps & SxProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box display="flex" columnGap="8px" alignItems="center" sx={{ ...sx }}>
      <img
        src="/images/common/brg_logo_color.png"
        width="64px"
        alt="brg logo"
      />
      <Typography variant="h4" align="center" fontWeight={600}>
        {title}
      </Typography>
    </Box>
  );
}

export default HomeSectionTitle;
