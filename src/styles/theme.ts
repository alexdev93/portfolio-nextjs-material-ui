'use client'

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#191d2b', // --color-primary
    },
    secondary: {
      main: '#27AE60', // --color-secondary
    },
    common: {
      white: '#FFFFFF', // --color-white
      black: '#000000', // --color-black
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          paddingLeft: 0,
          paddingRight: 0,
        },
      },
    },
  },
});

export default theme;
