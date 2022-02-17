import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import TermoContext from './TermoContext';

function TermoProvider({ children }) {
  const [correctAnswer, setCorrectAnswer] = useState('hello');
  const [playerAnswer, setPlayerAnswer] = useState(['', '', '', '', '']);

  const [inputsRender, setInputsRender] = useState([0, 0, 0, 0, 0, 0]);
  const [userInputs, setUserInputs] = useState([]);

  const [currentRow, setCurrentRow] = useState(1);

  const [colorRow1, setColorRow1] = useState([]);
  const [colorRow2, setColorRow2] = useState([]);
  const [colorRow3, setColorRow3] = useState([]);
  const [colorRow4, setColorRow4] = useState([]);
  const [colorRow5, setColorRow5] = useState([]);
  const [colorRow6, setColorRow6] = useState([]);

  // const [inputDisabled, setInputDisabled] = useState(false);

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

      const answerVerify = playerAnswer.map((letter) => [letter, 'bg-teal-600']);

      if (currentRow === 1) setColorRow1(answerVerify);
      if (currentRow === 2) setColorRow2(answerVerify);
      if (currentRow === 3) setColorRow3(answerVerify);
      if (currentRow === 4) setColorRow4(answerVerify);
      if (currentRow === 5) setColorRow5(answerVerify);
      if (currentRow === 6) setColorRow6(answerVerify);
    } else if (correctAnswer !== playerAnswerString) {
      if (inputsRender.length) {
        inputsRender.pop();
        setInputsRender(inputsRender);
      }

      if (userInputs.length <= 5) {
        setUserInputs((oldCounter) => [...oldCounter, 0]);
      }

      setCurrentRow((oldRow) => oldRow + 1);

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

      if (currentRow === 1) setColorRow1(answerVerify);
      if (currentRow === 2) setColorRow2(answerVerify);
      if (currentRow === 3) setColorRow3(answerVerify);
      if (currentRow === 4) setColorRow4(answerVerify);
      if (currentRow === 5) setColorRow5(answerVerify);
      if (currentRow === 6) setColorRow6(answerVerify);
    }
  };

  const value = useMemo(() => ({
    correctAnswer,
    setCorrectAnswer,
    playerAnswer,
    setPlayerAnswer,
    handleAnswer,
    inputsRender,
    userInputs,
    currentRow,
    colorRow1,
    colorRow2,
    colorRow3,
    colorRow4,
    colorRow5,
    colorRow6,
  }), [
    correctAnswer, setCorrectAnswer, playerAnswer, setPlayerAnswer,
    handleAnswer, inputsRender, userInputs,
    colorRow1, colorRow2, colorRow3,
    colorRow4, colorRow5, colorRow6,
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
