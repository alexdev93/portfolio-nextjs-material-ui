'use client'

import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import GlobalStyles from '../styles/GlobalStyles';
import LoaderComponent from '../components/LoaderComponent';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HomePage from './../pages/HomePage';
import Details from '../pages/Details';
import Education from '../pages/Education';
import AboutMe from '../pages/AboutMe';
import SkillsSection from '../pages/SkillsSection';
import ContactPage from '../pages/ContactPage';
import Experiance from '../pages/Experiance';
import Offerings from '../pages/Offerings';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => { };
  }, []);

  return (
    <Grid style={{ width: '100%', maxWidth: '100%', padding: 0 }}>
      <GlobalStyles />
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <Grid spacing={5} style={{ width: '100%', maxWidth: '100%', padding: 0, marginBottom: 10}} >
          <Navigation />
          <HomePage />
          <Offerings />
          {/* <Details /> */}
          <Education />
          <Experiance />
          <AboutMe />
          <SkillsSection />
          <ContactPage />
          <Footer />
        </Grid>
      )}
    </Grid>
    
  );
}
