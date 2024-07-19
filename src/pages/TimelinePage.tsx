// TimelinePage.tsx
import React from 'react';
import {
  OuterContainer,
  Heading,
  StickyCard,
  CardBody,
  CardHeader,
  CardTitle,
  CardDate,
  CardSubtitle,
  CardDetail,
} from './TimelineStyles';

const data = [
  {
    date: '2018-2022',
    title: 'Bachelor degree in Computer Science from Unity University',
    detail:
      'This degree program provided me with a strong foundation in the fundamentals of computer science, including programming, algorithms, data structures, and operating systems. I also gained experience in a variety of computer science-related fields, such as software engineering, web development, and information security.',
    bgColor: '#ff4f4f',
  },
  {
    date: '2016-2018',
    title: 'Preparatory, Goro Preparatory School',
    detail:
      'This school prepared me for the rigors of college by providing me with a strong foundation in the basics of math, science, and English. I also took a variety of elective courses that helped me to develop my interests and talents.',
    bgColor: '#ffb84f',
  },
  {
    date: '2014-2016',
    title: 'High School at Star Academy',
    detail:
      'This school challenged me academically and helped me to develop my critical thinking and problem-solving skills. I also participated in a variety of extracurricular activities, such as the debate team and the student government.',
    bgColor: '#3dca5c',
  },
  {
    date: 'experience',
    title: '',
    detail:
      'I am confident that my educational achievements have prepared me well for a career in computer science. I am a hard worker and I am always eager to learn new things.',
    bgColor: '#565252',
  },
  {
    date: 'experience',
    title: '',
    detail:
      'I am also a team player and I am confident that I can contribute to a positive work environment. I am excited to start my career and I am confident that I can make a significant impact in the field of computer science.',
    bgColor: '#4fa0ff',
  },
];

const TimelinePage: React.FC = () => {
  return (
    <OuterContainer>
      <Heading>Education & Experience</Heading>
      {data.map((item, index) => (
        <StickyCard key={index} bgColor={item.bgColor}>
          <CardHeader>
            <CardDate>{item.date}</CardDate>
            {item.title && <CardTitle>{item.title}</CardTitle>}
          </CardHeader>
          <CardBody>
            <CardDetail>{item.detail}</CardDetail>
          </CardBody>
        </StickyCard>
      ))}
    </OuterContainer>
  );
};

export default TimelinePage;
