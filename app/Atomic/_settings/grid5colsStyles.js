import { makeStyles } from '@material-ui/core';

export const grid5colsStyles = makeStyles(theme => ({
  grid5md: {
    [theme.breakpoints.up('md')]: {
      flexGrow: 0,
      maxWidth: '20%',
      flexBasis: '20%',
    },
  },
  grid5lg: {
    [theme.breakpoints.up('lg')]: {
      flexGrow: 0,
      maxWidth: '20%',
      flexBasis: '20%',
    },
  },
  grid5xl: {
    [theme.breakpoints.up('xl')]: {
      flexGrow: 0,
      maxWidth: '20%',
      flexBasis: '20%',
    },
  },
}));
