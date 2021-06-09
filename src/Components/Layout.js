import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  maxWidth: 1920,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingRight: 12,
  paddingLeft: 12,
};

const Layout = ({ children }) => <div style={styles}>{children}</div>;

export default Layout;

Layout.protoType = {
  children: PropTypes.element.isRequired,
};
