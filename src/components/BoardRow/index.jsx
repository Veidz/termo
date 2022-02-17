import React from 'react';
import PropTypes from 'prop-types';
import style from '../../style';
// import TermoContext from '../../context/TermoContext';

const { input } = style;

function BoardRow({ props }) {
  const { handleChange, disabled, color } = props;
  console.log(color[0]);

  // const { colorIndex } = useContext(TermoContext);
  // console.log(colorIndex);
  return (
    <>
      <input
        className={ color.length ? `${input} ${color[0][1]}` : `${input}` }
        type="text"
        onChange={ (event) => handleChange(0, event) }
        maxLength="1"
        disabled={ disabled }
      />
      <input
        className={ color.length ? `${input} ${color[1][1]}` : `${input}` }
        type="text"
        onChange={ (event) => handleChange(1, event) }
        maxLength="1"
        disabled={ disabled }
      />
      <input
        className={ color.length ? `${input} ${color[2][1]}` : `${input}` }
        type="text"
        onChange={ (event) => handleChange(2, event) }
        maxLength="1"
        disabled={ disabled }
      />
      <input
        className={ color.length ? `${input} ${color[3][1]}` : `${input}` }
        type="text"
        onChange={ (event) => handleChange(3, event) }
        maxLength="1"
        disabled={ disabled }
      />
      <input
        className={ color.length ? `${input} ${color[4][1]}` : `${input}` }
        type="text"
        onChange={ (event) => handleChange(4, event) }
        maxLength="1"
        disabled={ disabled }
      />
    </>
  );
}

BoardRow.propTypes = {
  props: PropTypes.shape(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

export default BoardRow;
