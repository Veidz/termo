import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import TermoContext from './TermoContext';

function TermoProvider({ children }) {
  const [correctAnswer, setCorrectAnswer] = useState('hello');
  const [playerAnswer, setPlayerAnswer] = useState(['', '', '', '', '']);

  const [colorIndex, setColorIndex] = useState();

  const [inputsRender, setInputsRender] = useState([0, 0, 0, 0, 0, 0]);
  const [userInputs, setUserInputs] = useState([]);

  // #3aa394 => letra certa/posicao certa (58, 163, 148)
  // #d3ad69 => letra certa/posicao errada (211, 173, 105)
  // #312a2c => letra errada (49, 42, 44)

  const handleAnswer = () => {
    const correctAnswerArray = correctAnswer.split('');
    const playerAnswerString = playerAnswer.join('');

    // Estritamente certo
    if (correctAnswer === playerAnswerString) {
      // Jogador acertou tudo
      if (inputsRender.length) {
        inputsRender.pop();
        setInputsRender(inputsRender);
      }

      if (userInputs.length <= 5) {
        setUserInputs((oldCounter) => [...oldCounter, 0]);
      }
    } else if (correctAnswer !== playerAnswerString) {
      if (inputsRender.length) {
        inputsRender.pop();
        setInputsRender(inputsRender);
      }

      if (userInputs.length <= 5) {
        setUserInputs((oldCounter) => [...oldCounter, 0]);
      }
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

  const value = useMemo(() => ({
    correctAnswer,
    setCorrectAnswer,
    playerAnswer,
    setPlayerAnswer,
    handleAnswer,
    colorIndex,
    inputsRender,
    userInputs,
  }), [
    correctAnswer, setCorrectAnswer, playerAnswer, setPlayerAnswer,
    handleAnswer, colorIndex, inputsRender, userInputs,
  ]);

  return (
    <TermoContext.Provider value={ value }>
      { children }
    </TermoContext.Provider>
  );
}

TermoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TermoProvider;
