import React, { useContext } from 'react';
import TermoContext from '../../context/TermoContext';
import BoardRow from '../BoardRow';
import style from '../../style';

const { input } = style;

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
    playerAnswer, setPlayerAnswer, colorIndex,
    inputsRender, userInputs,
  } = useContext(TermoContext);
  // console.log(colorIndex);
  const handleChange = (selectedPosition, { target }) => {
    const { value } = target;

    const playerPosition = playerAnswer.map((el, index) => (
      index === selectedPosition ? value : el
    ));

    setPlayerAnswer(playerPosition);
  };

  return (
    <div className="grid grid-cols-5">
      {/* First Row */}
      {colorIndex && (
        colorIndex.map((el) => (
          <input className={ `${input} ${el[1]}` } value={ el[0] } />
        ))
      )}
      <BoardRow handleChange={ handleChange } />
      <BoardRow handleChange={ handleChange } />
      <BoardRow handleChange={ handleChange } />
      <BoardRow handleChange={ handleChange } />
      <BoardRow handleChange={ handleChange } />
      <BoardRow handleChange={ handleChange } />
    </div>
  );
}

export default Board;
