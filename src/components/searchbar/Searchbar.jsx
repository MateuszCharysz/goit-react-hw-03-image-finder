import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  render() {
    return (
      <header className="searchbar">
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
            this.props.onSubmit(e.target.children[1].value);
          }}
        >
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
