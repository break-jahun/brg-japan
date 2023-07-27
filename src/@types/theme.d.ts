/* eslint-disable no-restricted-imports */
import * as createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  export interface Palette {
    gradient_blue: Palette['gradient_blue'];
    gradient_purple: Palette['gradient_purple'];
    black: Palette['black'];
    white: Palette['white'];

    // Gray
    gray_1: Palette['gray_1'];
    gray_2: Palette['gray_2'];
    gray_3: Palette['gray_3'];
    gray_4: Palette['gray_4'];
    gray_5: Palette['gray_5'];
    gray_6: Palette['gray_6'];
    gray_7: Palette['gray_7'];

    // Gray_New
    gray_100: Palette['gray_100'];
    gray_200: Palette['gray_200'];
    gray_300: Palette['gray_300'];
    gray_400: Palette['gray_400'];
    gray_500: Palette['gray_500'];
    gray_600: Palette['gray_600'];
    gray_700: Palette['gray_700'];
    gray_800: Palette['gray_800'];
    gray_900: Palette['gray_900'];

    primary_10: Palette['primary_10'];
    primary_20: Palette['primary_20'];
    primary_25: Palette['primary_25'];
    primary_30: Palette['primary_30'];
    primary_35: Palette['primary_35'];
    primary_40: Palette['primary_40'];
    primary_50: Palette['primary_50'];
    primary_60: Palette['primary_60'];
    primary_70: Palette['primary_70'];
    primary_80: Palette['primary_80'];
    primary_90: Palette['primary_90'];

    secondary_10: Palette['secondary_10'];
    secondary_20: Palette['secondary_20'];
    secondary_25: Palette['secondary_25'];
    secondary_30: Palette['secondary_30'];
    secondary_35: Palette['secondary_35'];
    secondary_40: Palette['secondary_40'];
    secondary_50: Palette['secondary_50'];
    secondary_60: Palette['secondary_60'];
    secondary_70: Palette['secondary_70'];
    secondary_80: Palette['secondary_80'];
    secondary_90: Palette['secondary_90'];

    comming_soon: Palette['comming_soon'];
    // Background color
    background_1: Palette['background_1'];
    background_2: Palette['background_2'];

    // Font color
    font_disabled: Palette['font_disabled'];
    font_body: Palette['font_body'];
    font_subHeadline: Palette['font_subHeadline'];

    // System Color
    system_red: Palette['system_red'];
    system_blue: Palette['system_blue'];
    system_green: Palette['system_green'];
    system_yellow: Palette['system_yellow'];

    system_red_1: Palette['system_red_1'];
    system_blue_1: Palette['system_blue_1'];
  }

  export interface PaletteOptions {
    gradient_blue: Palette['gradient_blue'];
    gradient_purple: Palette['gradient_purple'];
    black: Palette['black'];
    white: Palette['white'];

    // Gray
    gray_1: Palette['gray_1'];
    gray_2: Palette['gray_2'];
    gray_3: Palette['gray_3'];
    gray_4: Palette['gray_4'];
    gray_5: Palette['gray_5'];
    gray_6: Palette['gray_6'];
    gray_7: Palette['gray_7'];

    // Gray_New
    gray_100: Palette['gray_100'];
    gray_200: Palette['gray_200'];
    gray_300: Palette['gray_300'];
    gray_400: Palette['gray_400'];
    gray_500: Palette['gray_500'];
    gray_600: Palette['gray_600'];
    gray_700: Palette['gray_700'];
    gray_800: Palette['gray_800'];
    gray_900: Palette['gray_900'];

    comming_soon: Palette['comming_soon'];
    // Background color
    background_1: Palette['background_1'];
    background_2: Palette['background_2'];

    // Font color
    font_disabled: Palette['font_disabled'];
    font_body: Palette['font_body'];
    font_subHeadline: Palette['font_subHeadline'];

    // System Color
    system_red: Palette['system_red'];
    system_blue: Palette['system_blue'];
    system_green: Palette['system_green'];
    system_yellow: Palette['system_yellow'];

    system_red_1: Palette['system_red_1'];
    system_blue_1: Palette['system_blue_1'];
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: false;
    lg: false;
    xl: false;
  }
}
