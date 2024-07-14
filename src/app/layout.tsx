import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import theme from './../styles/themes'; // Import your custom theme

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <body>
          <Container maxWidth="lg" style={{ minHeight: '100vh' }}>
            {children}
          </Container>
        </body>
      </html>
    </ThemeProvider>
  );
};

export default Layout;
