import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/modal/Modal';

const ImageGalleryItem = ({ smallUrl, alt, bigFormatUrl }) => {
  const openModal = (tags, url) => {return(<Modal description={tags} source={url} />)}

  return (
    <li className={css.galleryItem}>
      <img
        src={smallUrl}
        alt={alt}
        className={css.galleryItemImage}
        onClick={()=> openModal(alt, bigFormatUrl)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
