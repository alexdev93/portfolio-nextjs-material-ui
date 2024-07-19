import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import theme from '../styles/theme';
import GlobalStyles from '../styles/GlobalStyles';
import '../styles/GlobalStyles.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <CssBaseline />
          
          <Container style={{ minHeight: '100vh', width: '100%', maxWidth: '100%', padding: 0 }}>
            {children}
          </Container>
        </body>
      </html>
    </ThemeProvider>
  );
};

export default Layout;
