
import { blue, grey, orange, red } from '@mui/material/colors';
import { colors, darken, lighten, Theme } from '@mui/material';
import { THEMES } from '../common/types';
import { components } from './components';

export const RED = '#d32f2f';
export const GREEN = '#4caf50';
export const WARNING = colors.deepOrange['500'];

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

export const common = {
  components: {
    ...components,
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'normal',
          '.MuiChip-root': {
            height: '17px',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '.MuiInputBase-input:not(.MuiInputBase-inputSizeSmall)': { padding: '13px 14px;' },
          
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          background: theme.palette.mode === 'light' ? lighten(theme.palette.primary.light, 0.8) : grey['800'],

          '.MuiTableCell-root,.MuiTableSortLabel-root': {
            // color: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          '.MuiButtonBase-root': {
            minWidth: 20,
            textTransform: 'none',
          },
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          '&.row-warning': {
            background: theme.palette.mode === 'light' ? lighten(theme.palette.warning.light, 0.8) : orange['800'],
          },
          '&.row-error': {
            background: theme.palette.mode === 'light' ? lighten(theme.palette.error.light, 0.7) : red['800'],
          },
        }),
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme: Theme) => ({
        ':root, :before, :after': {
          '--primary-color': `${theme.palette.primary.main} !important`,
        },
        '.truncate': {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        },
      }),
    },
  },
  typography: {
    fontFamily: "Poppins",
    h1: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    h2: {
      fontSize: 18,
      fontWeight: 500,
    },
    h3: {
      fontSize: 18,
      fontWeight: 500,
    },
    body1: {
      fontSize: 14,
    },
    h6: {
      fontSize: 13,
      fontWeight: 500,
      lineHeight: 1.5,
      whiteSpace: 'normal',
      textTransform: 'none',
    },
    title: {
      fontSize: 40,
      lineHeight: 1.2,
      fontWeight: 700,
      '@media (min-width:900px)': {
        lineHeight: 1.2,
        fontSize: 54,
      },
    },
    subtitle: {
      fontSize: 18,
      lineHeight: 1.2,
      fontWeight: 700,
      '@media (min-width:900px)': {
        lineHeight: 1.2,
        fontSize: 22,
      },
    },
  }
  
};

const LIGHT = {
  palette: {
    mode: THEMES.LIGHT,
    sidebar: {
      background: '#fff',
      color: 'secondary.main',
      activeColor: 'secondary.main',
      active: 'primary.light',
    },
    spaceSelector: '#f3f4f9',
    primary: {
      main: blue[600],
      contrastText: '#FFFFFF',
      light: blue[300],
      dark: blue[800]
    },
    secondary: {
      main: blue[600],
      light: blue[300]
    },
    neutral: {
      main: '#F4F5F6',
    },
    background: {
      default: '#f3f4f9',
      paper: '#fff',
    },
    formLabel: '#060812',
    text: {
      icon: blue[600]
    },
    link: blue[600]
  },
  ...common,
};

const DARK = {
  palette: {
    mode: THEMES.DARK,
    sidebar: '#212121',
    spaceSelector: '#222b36',
    background: {
      default: '#1e2732',
      paper: '#222b36',
    },
    primary: {
      main: '#e3bd52',
      contrastText: '#FFFFFF',
      light: darken('#e3bd52', 0.7),
      dark: darken('#e3bd52', 0.3),

    },
    secondary: {
      ...orange,
      main: orange['400'],
      light: orange['800'],
    },
    neutral: {
      main: grey['800'],
    },
    formLabel: '#FFFFFF',
    link: '#e3bd52',
    text: {
      primary: '#fff',
      secondary: '#fff'
    }

  },
  ...common,
};

export const THEME_SETTING = {
  [THEMES.LIGHT]: LIGHT,
  [THEMES.DARK]: DARK,
};
