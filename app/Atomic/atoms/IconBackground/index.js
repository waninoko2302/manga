import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  iconBackground: {
    display: 'inline-flex',
    position: 'relative',
    '&::before': {
      content: '""',
      width: theme.spacing(3),
      height: theme.spacing(3),
      borderRadius: '50%',
      backgroundColor: 'rgb(81,238,255,50%)',
      position: 'absolute',
      top: 0,
      left: theme.spacing(1),
      zIndex: 0,
    },
    '& > svg': {
      zIndex: 1,
    },
  },
}));

/* bọc ngoài icon để có style hình tròn xanh bên dưới */
export default function AtomIconBackground({ children }) {
  const classes = useStyles();
  return <span className={classes.iconBackground}>{children}</span>;
}
AtomIconBackground.propTypes = {
  children: PropTypes.any,
};
