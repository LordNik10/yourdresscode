import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1D1D1B',
    },
    secondary: {
      main: '#d9893c',
      contrastText: '#000',
      second: '#ffa500',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#fbc02d',
    },
    success: {
      main: '#388e3c',
    },
    info: {
      main: '#0288d1',
    },
    bgDark: {
      main: '#3C3C3C',
      contrastText: '#fff',
    },
    bgLight: {
      main: '#fff',
      contrastText: '#000',
    },
    btnColor: {
      main: '#ffa500',
    },
  },
  breakpoints: {
    values: {
      xs: 500,
      sm: 721,
      md: 900,
      lg: 992,
      xl: 1200,
      xxl: 1600,
    },
  },
  shape: {
    borderRadius: 0,
  },
  button: {
    border: 'orange',
    '&:hover': {
      background: 'orange',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto',
          margin: '4px auto',
        },
      },
    },
  },
});

theme.typography.h1 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '49px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '98px',
  },
};

theme.typography.h2 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '31px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '62px',
  },
};

theme.typography.h3 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '30px',
  },
};

theme.typography.h4 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
};

theme.typography.h5 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
};

theme.typography.h6 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '14px',
  },
};

theme.typography.body1 = {
  [theme.breakpoints.up('xs')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
};
