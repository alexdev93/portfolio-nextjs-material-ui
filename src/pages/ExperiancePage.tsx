import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import aboutMeStyles from './aboutMeStyles';
import theme from '../styles/theme';

const ExperiancePage = () => {
  const classes = aboutMeStyles(theme);

  return (
    <Box sx={classes.aboutSection}>
      <Box sx={classes.mainTitle}>
        <Typography variant="h2">
          About <span sx={classes.highlight}>me</span>
          <span sx={classes.bgText}>my stats</span>
        </Typography>
      </Box>
      <Grid container spacing={4} sx={classes.aboutContainer}>
        <Grid item xs={12} md={6}>
          <Box sx={classes.leftAbout}>
            <Typography variant="h4">Information About Me</Typography>
            <Typography variant="body1" sx={classes.paragraph}>
              In addition to my technical skills, I am committed to continuous learning and growth. I stay
              up-to-date with the latest trends and best practices in web development by attending
              conferences, participating in online communities, and reading industry publications.
            </Typography>
            <Typography variant="body1" sx={classes.paragraph}>
              I enjoy exploring new technologies and working on personal projects outside of work.
              Additionally, I volunteer my time to help non-profit organizations with their web
              development needs. Giving back to the community is a rewarding way for me to apply my skills
              and make a positive impact on the world.
            </Typography>
            <Box sx={classes.btnContainer}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<DownloadIcon />}
                href="https://fair-gray-goat-gown.cyclic.app/pdf"
              >
                Download CV
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {[
              { value: '10+', label: 'Projects Completed' },
              { value: '4+', label: 'Years of experience' },
              { value: '30+', label: 'Happy Clients' },
              { value: '40+', label: 'Customer reviews' },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={classes.card}>
                  <CardContent sx={classes.cardContent}>
                    <Typography variant="h3" sx={classes.largeText}>
                      {item.value}
                    </Typography>
                    <Typography variant="body1" sx={classes.smallText}>
                      {item.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperiancePage;
