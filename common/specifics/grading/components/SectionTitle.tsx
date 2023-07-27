import {
  useTheme,
  useMediaQuery,
  Typography,
  TypographyProps,
} from '@mui/material';
import { SxProps } from '@mui/material/styles';

interface SectionTitleProps extends Pick<TypographyProps, 'color'> {
  children: React.ReactNode;
  sx?: SxProps;
}
function SectionTitle({ sx = [], children, ...rest }: SectionTitleProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Typography
      component="h2"
      variant={isMobile ? 'h4' : 'h2'}
      align="center"
      gutterBottom
      fontWeight={900}
      sx={[...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    >
      {children}
    </Typography>
  );
}

export default SectionTitle;
