'use client'

import React, { useEffect, useState } from 'react';
import LoaderComponent from '../components/LoaderComponent';
import Navigation from '../components/Navigation';
import Container from '@mui/material/Container';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => { };
  }, []);

  return (
    <Container maxWidth="md">
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <main className={'main-content'}>
          <h1>Your Home Page Content</h1>
          <p>This is your home page content.</p>
          <Navigation />
        </main>
      )}
    </Container>
  );
}
