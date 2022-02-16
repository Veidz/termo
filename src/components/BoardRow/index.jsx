import React from 'react';
import PropTypes from 'prop-types';
import style from '../../style';

const { input } = style;

function BoardRow({ handleChange }) {
  return (
    <>
      <input
        className={ `${input}` }
        type="text"
        onChange={ (event) => handleChange(0, event) }
        maxLength="1"
      />
      <input
        className={ `${input}` }
        type="text"
        onChange={ (event) => handleChange(1, event) }
        maxLength="1"
      />
      <input
        className={ `${input}` }
        type="text"
        onChange={ (event) => handleChange(2, event) }
        maxLength="1"
      />
      <input
        className={ `${input}` }
        type="text"
        onChange={ (event) => handleChange(3, event) }
        maxLength="1"
      />
      <input
        className={ `${input}` }
        type="text"
        onChange={ (event) => handleChange(4, event) }
        maxLength="1"
      />
    </>
  );
}

BoardRow.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default BoardRow;
