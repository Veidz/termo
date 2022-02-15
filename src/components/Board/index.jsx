import React from 'react';
import style from '../../styles';

const { input } = style;

const gameBoard = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
]

const correctAnswer = "hello";

function Board() {

  const handleChange = (index) => {
    console.log(index);
  }

  return (
    <div className="grid grid-cols-5">
      {/* First Row */}
      <input
        className={ input }
        type="text"
        onChange={ () => handleChange(0) }
        maxLength="1"
      />
      <input
        className={ input }
        type="text"
        onChange={ () => handleChange(1) }
        maxLength="1"
      />
      <input
        className={ input }
        type="text"
        onChange={ () => handleChange(2) }
        maxLength="1"
      />
      <input
        className={ input }
        type="text"
        onChange={ () => handleChange(3) }
        maxLength="1"
      />
      <input
        className={ input }
        type="text"
        onChange={ () => handleChange(4) }
        maxLength="1"
      />
    </div>
  );
}

export default Board;
