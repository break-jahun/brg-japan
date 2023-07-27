import { Palette, PaletteOptions } from '@mui/material';

export const color = {
  primary: {
    main: '#6034B0',
    dark: '#2a047f',
    light: '#9361e3',
  },
  secondary: {
    main: '#5481b7',
    dark: '#1d5587',
    light: '#86b0e9',
  },
  // Gradient
  gradient_blue: '#5e8bc2',
  gradient_purple: '#6c35bd',

  black: '#111111',
  white: '#ffffff',

  // Gray
  gray_1: '#fafafa',
  gray_2: '#eeeeee',
  gray_3: '#c0c0c0',
  gray_4: '#a4a4a4',
  gray_5: '#646464',
  gray_6: '#333333',
  gray_7: '#27282c',

  // Gray_New
  gray_100: '#f5f5f5',
  gray_200: '#eeeeee',
  gray_300: '#e0e0e0',
  gray_400: '#bdbdbd',
  gray_500: '#9e9e9e',
  gray_600: '#757575',
  gray_700: '#616161',
  gray_800: '#424242',
  gray_900: '#212121',

  primary_10: '#24005B',
  primary_20: '#3E008E',
  primary_25: '#4A179A',
  primary_30: '#5628A6',
  primary_35: '#6236B2',
  primary_40: '#6E44BF',
  primary_50: '#885FDA',
  primary_60: '#A379F7',
  primary_70: '#BC99FF',
  primary_80: '#D4BBFF',
  primary_90: '#EBDCFF',

  secondary_10: '#001C38',
  secondary_20: '#00325B',
  secondary_25: '#003C6E',
  secondary_30: '#004882',
  secondary_35: '#005495',
  secondary_40: '#0F60A4',
  secondary_50: '#377ABF',
  secondary_60: '#5594DB',
  secondary_70: '#72AFF8',
  secondary_80: '#9FC9FF',
  secondary_90: '#D1E4FF',

  comming_soon: '#1ebbd0',
  // Background color
  background_1: '#f7f7fb',
  background_2: '#f1f1f5',
  skyblue: 'rgba(0, 145, 234, 0.2)',

  // Font color
  font_disabled: '#999999',
  font_body: '#767676',
  font_subHeadline: '#505050',

  // System Color
  system_red: '#DC0000',
  system_blue: '#304ffe',
  system_green: '#04B014',
  system_yellow: '#FFAA00',
  system_error: '#d32f2f',

  system_red_1: '#f44336',
  system_blue_1: '#5067eb',
  system_blue_2: '#4E5996',
} as const;

export type Color = keyof typeof color;

export const buttonSize = {
  height: {
    xs: '24px',
    sm: '32px',
    md: '40px',
    lg: '48px',
    xl: '56px',
  },
  width: {
    xs: '64px',
    sm: '68px',
    md: '72px',
    lg: '76px',
  },
  padding: {
    xs: '0px 8px',
    sm: '0px 12px',
    md: '0px 16px',
    lg: '0px 20px',
  },
};

export const textButtonSize = {
  height: {
    xs: '24px',
    sm: '40px',
  },
};

export const spacing = {
  letterSpacing: {
    default: 0,
    sm: 0.5,
    md: 1,
    lg: 1.5,
    xl: 2,
  },
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 10,
    lg: 30,
    xl: 50,
  },
};

export const typography: Typography = {
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  size: {
    s1: 9,
    s2: 10,
    s3: 12,
    m1: 14,
    m2: 16,
    m3: 18,
    l1: 20,
    l2: 22,
    xl1: 34,
    xl2: 48,
  },
};

export const TYPOGRAPHY = {
  weight: {
    regular: 'regular',
    medium: 'medium',
    bold: 'bold',
    extrabold: 'extrabold',
    black: 'black',
  } as const,
  size: {
    s1: 's1',
    s2: 's2',
    s3: 's3',
    m1: 'm1',
    m2: 'm2',
    m3: 'm3',
    l1: 'l1',
    l2: 'l2',
    xl1: 'xl1',
    xl2: 'xl2',
  } as const,
};

export type TypographyWeight =
  typeof TYPOGRAPHY.weight[keyof typeof TYPOGRAPHY.weight];
export type TypographySize =
  typeof TYPOGRAPHY.size[keyof typeof TYPOGRAPHY.size];

interface Typography {
  weight: {
    [key in TypographyWeight]: number;
  };
  size: {
    [key in TypographySize]: number;
  };
}

export const breakpoint = 600;
