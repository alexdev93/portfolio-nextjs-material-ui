// pages/contact.tsx

import React from 'react';
import { Container, Grid, Typography, TextField, Button, Box, Link as MuiLink } from '@mui/material';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import { SxProps, Theme } from '@mui/material/styles';

const contactPageStyles: Record<string, SxProps<Theme>> = {
  container: {
    padding: '2em',
  },
  title: {
    marginBottom: '2em',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: '2em',
  },
  contactInfo: {
    color: '#333',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1em',
  },
  contactIcon: {
    marginRight: '0.5em',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
  },
  formField: {
    width: '100%',
  },
  submitButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#007bff',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
};

const ContactPage: React.FC = () => {
  return (
    <Container style={{
      minHeight: '120vh',
      width: '100%',
      maxWidth: '100%',
      padding: 0,
      display: 'grid',
      placeItems: 'center',
      marginBottom: 10,
    }}>
      <Container sx={contactPageStyles.container}>
        <Typography variant="h4" sx={contactPageStyles.title}>
          Contact Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={contactPageStyles.section}>
              <Typography variant="h6" sx={{ marginBottom: '1em' }}>Contact Information</Typography>
              <Box sx={contactPageStyles.contactItem}>
                <Email sx={contactPageStyles.contactIcon} />
                <Typography sx={contactPageStyles.contactInfo}>
                  <MuiLink href="mailto:email@domain.com" color="inherit">email@domain.com</MuiLink>
                </Typography>
              </Box>
              <Box sx={contactPageStyles.contactItem}>
                <Phone sx={contactPageStyles.contactIcon} />
                <Typography sx={contactPageStyles.contactInfo}>
                  <MuiLink href="tel:+123456789" color="inherit">+123 456 789</MuiLink>
                </Typography>
              </Box>
              <Box sx={contactPageStyles.contactItem}>
                <LocationOn sx={contactPageStyles.contactIcon} />
                <Typography sx={contactPageStyles.contactInfo}>
                  123 Main Street, City, Country
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={contactPageStyles.section}>
              <Typography variant="h6" sx={{ marginBottom: '1em' }}>Send Me a Message</Typography>
              <Box component="form" sx={contactPageStyles.form}>
                <TextField
                  label="Name"
                  variant="outlined"
                  sx={contactPageStyles.formField}
                  required
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  sx={contactPageStyles.formField}
                  type="email"
                  required
                />
                <TextField
                  label="Subject"
                  variant="outlined"
                  sx={contactPageStyles.formField}
                  required
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  sx={contactPageStyles.formField}
                  multiline
                  rows={4}
                  required
                />
                <Button type="submit" sx={contactPageStyles.submitButton}>
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* Optionally, you can include a map here if you have a location to display */}
      </Container>
    </Container>
  );
};

export default ContactPage;
