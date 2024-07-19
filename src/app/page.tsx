'use client'

import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import GlobalStyles from '../styles/GlobalStyles';
import LoaderComponent from '../components/LoaderComponent';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HomePage from './../pages/HomePage';
import AboutPage from './../pages/AboutPage';
import TimelinePage from './../pages/TimelinePage';
import ExperiancePage from '../pages/ExperiancePage';
import SkillsSection from '../pages/SkillsSection';
import ContactPage from '../pages/ContactPage';
import TimelineSection from '../pages/TimelineSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => { };
  }, []);

  return (
    <Container id='page-container' >
      <GlobalStyles />
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <Container sx={{width: '100%'}} className={'home-page'}>
          <Navigation />
          <HomePage />
          <AboutPage />
          <TimelinePage />
          <TimelineSection />
          <ExperiancePage />
          <SkillsSection />
          <ContactPage />
          <Footer />
        </Container>
      )}
    </Container>
  );
}
