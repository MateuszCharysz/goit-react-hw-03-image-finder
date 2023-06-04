import React from 'react';
// import PropTypes from 'prop-types'

const ImageGalleryItem = ({ smallUrl, alt }) => {
  return (
    <li className="gallery-item">
      Zdjątka
      <img src={smallUrl} alt={alt} />
    </li>
  );
};

// ImageGalleryItem.propTypes = {}

export default ImageGalleryItem;
