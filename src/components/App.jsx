// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import Button from './button/Button';
import ImageGallery from './imageGallery/ImageGallery';
import Modal from './modal/Modal';

export default class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <Button />
        <Modal />
      </>
    );
  }
}
