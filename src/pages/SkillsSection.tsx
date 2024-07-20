import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import skillsStyles from '../styles/skillsStyles';
import theme from '../styles/theme';

const skills = [
  { title: 'HTML5', width: '80%', color: '#E44D26' },
  { title: 'C++', width: '60%', color: '#00599C' },
  { title: 'CSS3', width: '95%', color: '#1572B6' },
  { title: 'ReactJS', width: '75%', color: '#61DAFB' },
  { title: 'NodeJS', width: '87%', color: '#68A063' },
  { title: 'Python', width: '50%', color: '#3776AB' },
  { title: 'Go', width: '60%', color: '#00ADD8' },
  { title: 'Rust', width: '40%', color: '#DEA584' },
  { title: 'JavaScript', width: '95%', color: '#F7DF1E' },
];

const SkillsSection = () => {
  const classes = skillsStyles(theme);
  return (
    <Container>
      <Box sx={classes.aboutStats}>
        <Typography variant="h4" sx={classes.statTitle}>My Skills</Typography>
        <Grid container spacing={4} sx={classes.progressBars}>
          {skills.map((skill, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={classes.progressBar}>
                <Typography variant="body1" sx={classes.progTitle}>{skill.title}</Typography>
                <Box sx={classes.progressCon}>
                  <Box sx={classes.progress}>
                    <Box sx={{ ...classes.progressInner, width: skill.width, backgroundColor: skill.color }} />
                  </Box>
                  <Typography variant="body2" sx={classes.progText}>{skill.width}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default SkillsSection;
