import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
// import Modal from 'components/modal/Modal';

export class ImageGallery extends Component {
  // const { id, webformatURL, tags, largeImageURL } = this.props.data
  // console.log(data);
  data = this.props.data;

  state = {
    bigUrl: '',
    description: '',
  };

  // handleItem = e => {
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(e.target.props);
  // };

  handleItem = callback => {
    console.log(callback)
    const { bigFormatUrl, alt } = callback;
    // console.log(bigFormatUrl);
    this.setState({ bigUrl: bigFormatUrl, description: alt });
  };

  render() {
    console.log(this.props.data);
    const data = this.props.data;
    // const { id, webformatURL, tags, largeImageURL } = data;
    return (
      <>
        <ul className={css.gallery}>
          {data.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              smallUrl={webformatURL}
              alt={tags}
              bigFormatUrl={largeImageURL}
              galleryStateFunc={this.handleItem}
            />
          ))}
        </ul>
        {/* {this.state.bigFormatUrl !== '' && <Modal />} */}
      </>
    );
  }
}

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
