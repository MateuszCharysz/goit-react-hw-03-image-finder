// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import Button from './button/Button';
import ImageGallery from './imageGallery/ImageGallery';
import Modal from './modal/Modal';
import { apiUrl } from './js/api-url';
import { pixabayApiLuncher } from './js/pixabay-api-luncher';

//   const apiUrlsState =()=> {
//     const { querry, page, perPage } = this.state;
//     console.log(pixabayApiLuncher(apiUrl(querry, page, perPage)));
//   };
// apiUrlsState()
export class App extends Component {
  state = {
    querry: '',
    page: 1,
    perPage: 12,
  };

  apiUrlState() {
    const { querry, page, perPage } = this.state;
    console.log(pixabayApiLuncher(apiUrl(querry, page, perPage)));
  }

  submitHandler = value => {
    this.setState(prevState => ({ ...(prevState.querry = value) }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.submitHandler} />
        <ImageGallery />
        <Button />
        <Modal />
      </>
    );
  }
  componentDidUpdate() {
    this.apiUrlState()
  }
}
