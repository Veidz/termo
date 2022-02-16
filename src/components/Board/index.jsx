import React, { useContext } from 'react';
import TermoContext from '../../context/TermoContext';
import BoardRow from '../BoardRow';


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
    correctAnswer, setCorrectAnswer,
    playerAnswer, setPlayerAnswer,
  } = useContext(TermoContext);

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
      <BoardRow handleChange={ handleChange } />
    </div>
  );
}

export default Board;
