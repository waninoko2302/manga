import React from 'react';
import PropTypes from 'prop-types';
import { labelStyles } from './labelStyles';

/* label màu cam */
export default function AtomOrangeLabel({ children }) {
  const classes = labelStyles();
  return <span className={classes.orangeLabel}>{children}</span>;
}
AtomOrangeLabel.propTypes = {
  children: PropTypes.any,
};
