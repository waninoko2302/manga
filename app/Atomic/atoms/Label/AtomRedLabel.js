import React from 'react';
import PropTypes from 'prop-types';
import { labelStyles } from './labelStyles';

/* label khuyến mãi */
export default function AtomRedLabel({ children, ...props }) {
  const classes = labelStyles();
  return (
    <span className={classes.redLabel} {...props}>
      {children}
    </span>
  );
}
AtomRedLabel.propTypes = {
  children: PropTypes.any,
};
