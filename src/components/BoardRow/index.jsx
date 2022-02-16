import React, { useContext } from 'react'
import TermoContext from '../../context/TermoContext';
import style from '../../style';

const { input } = style;

function BoardRow({ handleChange }) {

  const { colorIndex } = useContext(TermoContext);

  return (
    <>
      <input
        className={`${input} ${colorIndex[0]}`}
        type="text"
        onChange={(event) => handleChange(0, event)}
        maxLength="1"
      />
        <input
        className={`${input} ${colorIndex[1]}`}
        type="text"
        onChange={(event) => handleChange(1, event)}
        maxLength="1"
      />
      <input
        className={`${input} ${colorIndex[2]}`}
        type="text"
        onChange={(event) => handleChange(2, event)}
        maxLength="1"
      />
      <input
        className={`${input} ${colorIndex[3]}`}
        type="text"
        onChange={(event) => handleChange(3, event)}
        maxLength="1"
      />
      <input
        className={`${input} ${colorIndex[4]}`}
        type="text"
        onChange={(event) => handleChange(4, event)}
        maxLength="1"
      />
    </>
  )
}

export default BoardRow;
