import React from 'react';
import PropTypes from 'prop-types'
import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({ smallUrl, alt }) => {
  return (
    <li className={css.galleryItem}>
      <img src={smallUrl} alt={alt} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default ImageGalleryItem;
