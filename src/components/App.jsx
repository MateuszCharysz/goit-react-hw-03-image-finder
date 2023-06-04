// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import Button from './button/Button';
import ImageGallery from './imageGallery/ImageGallery';
import Modal from './modal/Modal';
import { apiUrl } from './js/api-url';
import { pixabayApiLuncher } from './js/pixabay-api-luncher';
import Loader from './loader/Loader';
// import isEqual from 'lodash.isequal';

export class App extends Component {
  state = {
    querry: '',
    page: 1,
    perPage: 12,
    isLoading: false,
    pictures: [],
    error: null,
  };

  apiUrlState = async () => {
    const { querry, page, perPage } = this.state;
    this.setState({ isLoading: true });
    try {
      const answer = await pixabayApiLuncher(apiUrl(querry, page, perPage));
      this.setState({ pictures: answer.data.hits });
    } catch (er) {
      this.setState({ error: er });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  submitHandlerSearch = value => {
    this.setState({ querry: value, page: 1 });
  };

  pageHandlerBtn = value => {
    this.setState({ page: value++ });
  };

  render() {
    const { pictures, isLoading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.submitHandlerSearch} />
        {isLoading ? (
          <Loader />
        ) : error !== null ? (
          <p>Wystąpił błąd: {error}</p>
        ) : pictures.length > 0 ? (
          <ImageGallery data={this.state.pictures} />
        ) : (
          <p>pusto</p>
        )}
        <Button pagehandler={this.pageHandlerBtn} />
        <Modal />
      </>
    );
  }
  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.querry !== this.state.querry ||
      prevState.page !== this.state.page
    )
      await this.apiUrlState();
  }
}
