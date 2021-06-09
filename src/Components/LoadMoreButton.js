import React from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

const LoadMoreButton = ({ loadMore }) => (
  <button type="button" className="Button" onClick={() => loadMore()}>
    Load more
  </button>
);

export default LoadMoreButton;

LoadMoreButton.protoType = {
  loadMore: PropTypes.func.isRequired,
};
