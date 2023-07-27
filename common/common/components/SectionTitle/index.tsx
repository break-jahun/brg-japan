import {
  Typography,
  TypographyTypeMap,
  SxProps,
  useTheme,
  useMediaQuery,
} from '@mui/material';

interface SectionTitleProps {
  color?: string;
  align?: TypographyTypeMap['props']['align'];
  variant?: TypographyTypeMap['props']['variant'];
  children: string;
}

function SectionTitle({
  color,
  align,
  sx,
  variant,
  children,
}: SectionTitleProps & { sx?: SxProps }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Typography
      align={align || 'center'}
      variant={variant || isMobile ? 'h4' : 'h3'}
      component="h2"
      fontWeight={600}
      color={color || 'secondary_20'}
      sx={{
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}

export default SectionTitle;
