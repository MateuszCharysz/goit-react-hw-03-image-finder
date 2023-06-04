import React from 'react';
import PropTypes from 'prop-types'
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'

const ImageGallery = ({ data }) => {
  console.log(data);
  return (
    <ul className={css.gallery}>
      {data.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} smallUrl={webformatURL} alt={tags} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ImageGallery;
