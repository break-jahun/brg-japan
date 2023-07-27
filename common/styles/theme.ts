import { createTheme, Theme, responsiveFontSizes } from '@mui/material/styles';
import { color } from '@/styles/styles';

export const getTheme = (): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: color,
      typography: {
        fontFamily:
          '"Pretendard JP Variable", "Pretendard JP", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Hiragino Sans", "Apple SD Gothic Neo", Meiryo, "Noto Sans JP", "Noto Sans KR", "Malgun Gothic", Osaka, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
        h1: {
          fontSize: 92,
          lineHeight: 1.5,
          letterSpacing: '-1.5px',
        },
        h2: {
          fontSize: 58,
          lineHeight: 1.5,
          letterSpacing: '-0.5px',
        },
        h3: {
          fontSize: 48,
          lineHeight: 1.5,
          letterSpacing: 0,
        },
        h4: {
          fontSize: 32,
          lineHeight: 1.625,
          letterSpacing: '0.25px',
        },
        h5: {
          fontSize: 24,
          lineHeight: 1.5,
          letterSpacing: 0,
        },
        h6: {
          fontSize: 20,
          lineHeight: 1.4,
          letterSpacing: '0.15px',
        },
        subtitle1: {
          fontSize: 16,
          lineHeight: 1.5,
          letterSpacing: '0.15px',
        },
        subtitle2: {
          fontSize: 14,
          lineHeight: 1.4,
          letterSpacing: '0.1px',
        },
        body1: {
          fontSize: 16,
          lineHeight: 1.5,
          letterSpacing: '0.5px',
        },
        body2: {
          fontSize: 14,
          lineHeight: 1.4,
          letterSpacing: '0.25px',
        },
        button: {
          fontSize: 14,
          lineHeight: 1.4,
          letterSpacing: '1.25px',
          textTransform: 'inherit',
        },
        caption: {
          fontSize: 12,
          lineHeight: 1.6,
          letterSpacing: '0.4px',
        },
        overline: {
          fontSize: 10,
          lineHeight: 1.6,
          letterSpacing: '1.5px',
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
        },
      },
    }),
    {
      breakpoints: ['xs', 'sm'],
      disableAlign: true,
      factor: 1,
    }
  );
