// contactPageStyles.ts
import { SxProps, Theme } from '@mui/material/styles';
import createCustomTheme from './../theme';

// Get theme values
const theme = createCustomTheme();

const contactPageStyles: Record<string, SxProps<Theme>> = {
  container: {
    padding: '2em',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
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
    border: '1px solid #7297A6',
    width: '100%',
    color: theme.palette.common.white,
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#7297A6',
      },
      '&:hover fieldset': {
        borderColor: theme.palette.secondary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '& .MuiInputBase-input': {
        color: theme.palette.common.white,
      },
    },
  },
  submitButton: {
    alignSelf: 'flex-start',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark, // Use a darker shade from the secondary palette if available
    },
  },
};

export default contactPageStyles;
