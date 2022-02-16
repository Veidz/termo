import React, { useContext } from 'react';
import TermoContext from '../../context/TermoContext';
import style from '../../style';

const { button } = style;

function SubmitButton() {
  const { handleAnswer } = useContext(TermoContext);

  return (
    <button
      type="button"
      className={button}
      onClick={handleAnswer}
    >
      Submit
    </button>
  );
}

export default SubmitButton;
