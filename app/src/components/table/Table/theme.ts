import { createMuiTheme, ThemeOptions } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { PaletteColor } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      width: React.CSSProperties['width'];
      breakpoint: Breakpoint;
    };
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: any;
      breakpoint?: Breakpoint;
    };
  }
}

// declare module '@material-ui/core/styles/createPalette' {

//   interface Palette {
//     primary: PaletteColor | any;
//   }

//   interface PalletteOptions  {
//     primary: PaletteColor | any;
//   }
// }

export const theme = createMuiTheme({
  palette: {
    grey: {
      50: '#FF0000',
      100: '#FF0000',
      200: '#FF0000',
      300: '#FF0000',
      400: '#bdbdbd',
      500: '#FF0000',
      600: '#FF0000',
      700: '#616161',
      800: '#FF0000',
      900: '#FF0000',
      A100: '#FF0000',
      A200: '#FF0000',
      A400: '#FF0000',
      A700: '#FF0000',
    },
    text: {
      primary: '#FF00000',
      secondary: 'rgba(255, 255, 255, 0.25)'
    },
    primary: {
      main: '#FF0000',
      light: '#FF0000',
      dark: '#FF0000',
    },
    secondary: {
      main: '#FF0000',
      light: '#FF0000',
      dark: '#FF0000',
    },
  },
});