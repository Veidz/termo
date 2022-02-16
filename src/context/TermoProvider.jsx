import React, { useState } from 'react'
import TermoContext from './TermoContext';

function TermoProvider({ children }) {
  const [correctAnswer, setCorrectAnswer] = useState('hello');
  const [playerAnswer, setPlayerAnswer] = useState(['', '', '', '', '']);

  const [colorIndex, setColorIndex] = useState([]);

  // #3aa394 => letra certa/posicao certa
  // #d3ad69 => letra certa/posicao errada
  // #312a2c => letra errada

  const handleAnswer = () => {
    const correctAnswerArray = correctAnswer.split('');
    const playerAnswerString = playerAnswer.join('');

    // Estritamente certo
    if (correctAnswer === playerAnswerString) {
      // Jogador acertou tudo
      console.log('acertou tudo!')
    } else if (correctAnswer !== playerAnswerString) {
      const answerVerify = playerAnswer.map((letter, index) => {
        if (correctAnswerArray.includes(letter)) {

          if (correctAnswerArray[index] === letter) {
            // Letra certa e posicao certa
            return '#3aa394';
          }

          if (correctAnswerArray[index] !== letter) {
            // Letra certa e posicao errada
            return '#d3ad69';
          }
        }
        return '#312a2c';
      })
      setColorIndex(answerVerify);
    }  
  };

  const value = {
    correctAnswer,
    setCorrectAnswer,
    playerAnswer,
    setPlayerAnswer,
    handleAnswer,
  }

  return (
    <TermoContext.Provider value={ value }>
      { children }
    </TermoContext.Provider>
  )
}

export default TermoProvider;
