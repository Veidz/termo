import React, { useContext, useState } from 'react';
import TermoContext from '../../context/TermoContext';
import BoardRow from '../BoardRow';
// import style from '../../style';

// const { input } = style;

// const gameBoard = [
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
// ];

// const correctAnswer = 'hello';

function Board() {
  const {
    playerAnswer, setPlayerAnswer, currentRow,
    colorRow1, colorRow2, colorRow3, colorRow4, colorRow5, colorRow6,
  } = useContext(TermoContext);

  console.log(colorRow1);
  console.log(colorRow2);
  console.log(colorRow3);
  console.log(colorRow4);
  console.log(colorRow5);

  const handleChange = (selectedPosition, { target }) => {
    const { value } = target;

    const playerPosition = playerAnswer.map((el, index) => (
      index === selectedPosition ? value : el
    ));

    setPlayerAnswer(playerPosition);
  };

  const boardRow1 = {
    handleChange,
    disabled: currentRow !== 1,
    color: colorRow1 && colorRow1,
  };

  const boardRow2 = {
    handleChange,
    disabled: currentRow !== 2,
    color: colorRow2 && colorRow2,
  };

  const boardRow3 = {
    handleChange,
    disabled: currentRow !== 3,
    color: colorRow3 && colorRow3,
  };

  const boardRow4 = {
    handleChange,
    disabled: currentRow !== 4,
    color: colorRow4 && colorRow4,
  };

  const boardRow5 = {
    handleChange,
    disabled: currentRow !== 5,
    color: colorRow5 && colorRow5,
  };

  const boardRow6 = {
    handleChange,
    disabled: currentRow !== 6,
    color: colorRow6 && colorRow6,
  };

  return (
    <div className="grid grid-cols-5">
      {/* First Row */}
      <BoardRow props={ boardRow1 } />

      {/* Second Row */}
      <BoardRow props={ boardRow2 } />

      {/* Third Row */}
      <BoardRow props={ boardRow3 } />

      {/* Fourth Row */}
      <BoardRow props={ boardRow4 } />

      {/* Fifth Row */}
      <BoardRow props={ boardRow5 } />

      {/* Sixth Row */}
      <BoardRow props={ boardRow6 } />
    </div>
  );
}

export default Board;
