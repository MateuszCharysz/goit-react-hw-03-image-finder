import React from 'react';
import PropTypes from 'prop-types'

const ImageGalleryItem = ({ smallUrl, alt }) => {
  return (
    <li className="gallery-item">
      <img src={smallUrl} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default ImageGalleryItem;
