import { createMuiTheme } from '@material-ui/core';

import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

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

const activeColor = '#009688'
const paperColor = '#111111';
const textOnLightColor = '#111111';

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      paper: '#FFFFFF'
    },
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
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.25)',
      
    },
    // primary: {
    //   main: '#FF0000',
    //   light: '#FF0000',
    //   dark: '#FF0000',
    // },
    secondary: {
      main: activeColor,
    //   light: '#FF0000',
    //   dark: '#FF0000',
    },
    action: {
      active: activeColor,
      disabled: 'rgba(255, 255, 255, 0.5)'
    }
  },
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    
    fontSize: 12,
    htmlFontSize: 10,
  },
  overrides: {
    MuiSelect: {
      selectMenu: {
        minHeight: 'unset'
      }
    },
    MuiPopover: {
      paper: {
        '& .MuiFormLabel-root, & .MuiInput-input': {
          color: textOnLightColor
        },
        '& .Mui-focused': {
          color: activeColor
        },
        '& .MuiButton-root': {
          color: activeColor
        },
        '& .MuiInput-underline:before': {
          borderColor: textOnLightColor
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
          borderColor: textOnLightColor
        },
        '& .MuiInput-underline:after': {
          borderColor: activeColor
        },
        color: textOnLightColor,
      }
    },
    MuiInputBase: {
      root: {
        lineHeight: 1
      }
    },
    MuiTableSortLabel: {
      icon: {
        marginTop: 0
      }
    }
  }
});
