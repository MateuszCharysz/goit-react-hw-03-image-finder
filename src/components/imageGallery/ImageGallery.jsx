import React from 'react';
// import PropTypes from 'prop-types'
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ data }) => {
  console.log(data);
  return (
    <ul className="gallery">
      {data.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} smallUrl={webformatURL} alt={tags} />
      ))}
    </ul>
  );
};

export default ImageGallery;
