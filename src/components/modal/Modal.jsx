import React from 'react';
// import PropTypes from 'prop-types'
import css from './Modal.module.css';

const Modal = ({ description, source }) => {

  const closeModal = (e) => {

  }

  return (
    <div className={css.overlay} onClick={closeModal}>
      <div className={css.modal}>
        Modal
        <img src={source} alt={description} />
      </div>
    </div>
  );
};

// Modal.propTypes = {}

export default Modal;
