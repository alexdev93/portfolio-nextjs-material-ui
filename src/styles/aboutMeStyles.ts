import { SxProps, Theme } from '@mui/material/styles';

const aboutMeStyles = (theme: Theme): Record<string, SxProps<Theme>> => ({
  aboutSection: {
    padding: '2em',
    color: theme.palette.primary.main,
  },
  mainTitle: {
    marginBottom: '3.5rem',

    '& h2': {
      fontSize: '2.5rem',
      fontWeight: 'bold',

      '& span': {
        color: theme.palette.secondary.main,
      },

      '& .bgText': {
        display: 'block',
        fontSize: '4rem',
        opacity: 0.1,
      },
    },
  },
  aboutContainer: {
    paddingBottom: '5rem',
  },
  leftAbout: {
    paddingRight: '2rem',

    '& h4': {
      fontSize: '2rem',
      textTransform: 'uppercase',
      marginBottom: '1rem',
    },
  },
  paragraph: {
    lineHeight: 1.5,
    marginBottom: '1rem',
    color: theme.palette.text.secondary,
  },
  btnContainer: {
    marginTop: '2rem',
  },
  card: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    transition: 'all 0.4s ease-in-out',
    boxShadow: '1px 2px 15px rgba(0, 0, 0, 0.1)',

    '&:hover': {
      cursor: 'default',
      transform: 'translateY(-5px)',
      border: `1px solid ${theme.palette.secondary.main}`,
      boxShadow: '1px 4px 15px rgba(0, 0, 0, 0.32)',
    },
  },
  cardContent: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  largeText: {
    fontSize: '3rem',
    fontWeight: 700,
    color: theme.palette.secondary.main,
    marginBottom: '0.5rem',
  },
  smallText: {
    fontSize: '1.2rem',
    color: theme.palette.text.secondary,
    textTransform: 'uppercase',
  },
  highlight: {
    color: theme.palette.secondary.main,
  },
  bgText: {
    display: 'block',
    fontSize: '4rem',
    opacity: 0.1,
  },
});

export default aboutMeStyles;
