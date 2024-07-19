import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { Work, School } from '@mui/icons-material';

const experiences = [
  {
    duration: '2023 - present',
    title: 'Web Developer',
    company: 'Freelancer',
    description: 'As a freelance web developer, I have been working on various projects, utilizing my skills and expertise in web development. I specialize in creating engaging and user-friendly websites.',
    icon: <Work />,
  },
  {
    duration: '2022 - 2023',
    title: 'Front-end',
    company: 'Solo Learn',
    description: 'During this period, I focused on enhancing my front-end development skills through the SoloLearn platform. I learned and practiced the latest technologies and techniques to build modern and responsive web interfaces.',
    icon: <Work />,
  },
  {
    duration: '2019 - 2020',
    title: 'JS Programmer',
    company: 'Code with Mosh',
    description: 'I dedicated this time to become proficient in JavaScript programming through the Code with Mosh platform. I gained a deep understanding of JavaScript fundamentals and advanced concepts, enabling me to develop robust and interactive web applications.',
    icon: <Work />,
  },
  {
    duration: '2020 - 2021',
    title: 'Game Developer',
    company: 'Solo Learn',
    description: 'During this period, I explored the field of game development through SoloLearn. I acquired knowledge and hands-on experience in creating games using different frameworks and tools, enhancing my creativity and problem-solving skills.',
    icon: <Work />,
  },
  {
    duration: '2018 - 2023',
    title: 'Computer Science Degree',
    company: 'Unity University',
    description: 'I pursued a comprehensive computer science degree from Unity University. The program provided me with a solid foundation in computer science principles, algorithms, data structures, and software development methodologies.',
    icon: <School />,
  },
  {
    duration: '2023 - present',
    title: 'Web Assembly',
    company: '',
    description: 'Currently, I am focusing on learning and utilizing Web Assembly technology to enhance web application performance and explore new possibilities for web development. I aim to leverage the power of Web Assembly to build efficient and high-performance web applications.',
    icon: <Work />,
  },
];

const TimelineSection = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        My Timeline
      </Typography>
      <Grid container spacing={4}>
        {experiences.map((experience, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box
              sx={{
                position: 'relative',
                paddingLeft: '3rem',
                borderLeft: '1px solid grey',
                mb: '2rem',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: '-25px',
                  top: 0,
                  backgroundColor: 'secondary.main',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {experience.icon}
              </Box>
              <Typography
                variant="body2"
                sx={{
                  padding: '0.2rem 0.6rem',
                  backgroundColor: 'grey.300',
                  borderRadius: '15px',
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  fontWeight: '500',
                  mb: '0.5rem',
                }}
              >
                {experience.duration}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {experience.title}
                {experience.company && (
                  <span style={{ color: 'grey.600', fontWeight: 500 }}>
                    {' '}
                    - {experience.company}
                  </span>
                )}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {experience.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TimelineSection;
