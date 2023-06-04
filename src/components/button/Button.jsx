import React from 'react';
// import PropTypes from 'prop-types'

const Button = ({ pagehandler }) => {
  return (
    <button type="button" onClick={pagehandler} className='loadmore'>
      Load more
    </button>
  );
};

// Button.propTypes = {}

export default Button;
