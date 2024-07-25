import { SxProps, Theme } from '@mui/material/styles';
import createCustomTheme from './../theme';

// Get theme values
const theme = createCustomTheme();

const contactPageStyles: Record<string, SxProps<Theme>> = {
  container: {
    padding: '2em',
    backgroundColor: theme.palette.primary.main,
    color: '#FFF',
  },
  title: {
    marginBottom: '2em',
    textAlign: 'center',
    fontWeight: 'bold',
    color: theme.palette.common.white,
  },
  section: {
    marginBottom: '2em',
  },
  contactInfo: {
    color: theme.palette.common.white,
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1em',
    color: theme.palette.common.white,
  },
  contactIcon: {
    marginRight: '0.5em',
    color: theme.palette.common.white,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1em',
    color: theme.palette.common.white,
  },
  formField: {
    width: '100%',
    color: '#fff',
  },
  submitButton: {
    alignSelf: 'flex-start',
    backgroundColor: theme.palette.secondary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0056b3',
    },
  },
};

export default contactPageStyles;