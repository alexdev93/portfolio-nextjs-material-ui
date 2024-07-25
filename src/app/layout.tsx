import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Grid } from '@mui/material';
import theme from '../styles/theme';
import '../styles/GlobalStyles.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <CssBaseline />
          
          <Grid style={{ minHeight: '100vh', width: '100%', maxWidth: '100%', padding: 0 }}>
            {children}
          </Grid>
        </body>
      </html>
    </ThemeProvider>
  );
};

export default Layout;
