import React from 'react';
import { Container, Typography, Box, Paper, Grid, styled } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import createCustomTheme from './../theme';

// Get theme values
const theme = createCustomTheme();

const EducationContainer = styled(Container)(() => ({
  padding: '2rem',
  backgroundColor: theme.palette.primary.main,
  minHeight: '70vh',
  display: 'grid',
  placeItems: 'center',
}));
const EducationItem = styled(Paper)`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  box-shadow: var(--box-shadow);
  color: ${theme.palette.common.white};
  background-color: ${theme.palette.primary.main};
  border-radius: 8px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

const EducationDetails = styled(Box)`
  margin-left: 1rem;
`;

const SchoolName = styled(Typography)`
  font-weight: bold;
  color: ${theme.palette.common.white};
`;

const Degree = styled(Typography)`
  color: ${theme.palette.common.white};
`;

const Education: React.FC = () => {
  const educationData = [
    {
      school: 'Gebeya Training',
      degree: 'Certified Backend Developer',
      year: '2023',
    },
    {
      school: 'University of Addis Ababa',
      degree: 'Bachelor of Computer Science',
      year: '2022',
    },
    {
      school: 'Safaricom Internship',
      degree: 'Intensive Internship in Insurance Research',
      year: '2021',
    },
  ];

  return (
    <EducationContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Education
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {educationData.map((edu, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <EducationItem>
              <SchoolIcon color="secondary" fontSize="large" />
              <EducationDetails>
                <SchoolName variant="h6">{edu.school}</SchoolName>
                <Degree variant="subtitle1">{edu.degree}</Degree>
                <Typography variant="body2">{edu.year}</Typography>
              </EducationDetails>
            </EducationItem>
          </Grid>
        ))}
      </Grid>
    </EducationContainer>
  );
};

export default Education;
