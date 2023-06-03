import React from 'react';
// import PropTypes from 'prop-types'

const ImageGalleryItem = ({ id, smallUrl, alt }) => {
  return (
    <li key={id} className="gallery-item">
      Zdjątka
      <img src={smallUrl} alt={alt} />
    </li>
  );
};

// ImageGalleryItem.propTypes = {}

export default ImageGalleryItem;
