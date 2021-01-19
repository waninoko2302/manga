import React from 'react';
import AtomLink from '../Link';
import AtomRouterLink from '../RouterLink';

/* Link sử dụng react route dom và được bỏ underline */
const AtomLinkTo = props => (
  <AtomLink component={AtomRouterLink} to="/" {...props} />
);
export default AtomLinkTo;
