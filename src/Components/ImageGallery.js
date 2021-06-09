import React from 'react';
import '../styles.css';
import PropTypes from 'prop-types';

function ImageGallery({ images, openModal }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <li
          key={id}
          className="ImageGalleryItem"
          onClick={() => openModal(largeImageURL)}
        >
          <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ),
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
