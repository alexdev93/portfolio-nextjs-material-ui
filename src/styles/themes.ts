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
  }
});

export default theme;
