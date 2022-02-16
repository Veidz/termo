import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import TermoContext from './TermoContext';

function TermoProvider({ children }) {
  const [correctAnswer, setCorrectAnswer] = useState('hello');
  const [playerAnswer, setPlayerAnswer] = useState(['', '', '', '', '']);

  const [colorIndex, setColorIndex] = useState();

  // #3aa394 => letra certa/posicao certa (58, 163, 148)
  // #d3ad69 => letra certa/posicao errada (211, 173, 105)
  // #312a2c => letra errada (49, 42, 44)

  const handleAnswer = () => {
    const correctAnswerArray = correctAnswer.split('');
    const playerAnswerString = playerAnswer.join('');

    // Estritamente certo
    if (correctAnswer === playerAnswerString) {
      // Jogador acertou tudo
      // console.log('acertou tudo!');
    } else if (correctAnswer !== playerAnswerString) {
      const answerVerify = playerAnswer.map((letter, index) => {
        if (correctAnswerArray.includes(letter)) {
          if (correctAnswerArray[index] === letter) {
            // Letra certa e posicao certa
            return [letter, 'bg-teal-600'];
          }

          if (correctAnswerArray[index] !== letter) {
            // Letra certa e posicao errada
            return [letter, 'bg-yellow-500'];
          }
        }
        return [letter, 'bg-stone-900'];
      });
      setColorIndex(answerVerify);
    }
  };

  const value = {
    correctAnswer,
    setCorrectAnswer,
    playerAnswer,
    setPlayerAnswer,
    handleAnswer,
    colorIndex,
  }
  // const value = useMemo(() => ({
  //   correctAnswer,
  //   setCorrectAnswer,
  //   playerAnswer,
  //   setPlayerAnswer,
  //   handleAnswer,
  //   colorIndex,
  // }), []);
  return (
    <TermoContext.Provider value={value}>
      { children }
    </TermoContext.Provider>
  );
}

TermoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TermoProvider;
