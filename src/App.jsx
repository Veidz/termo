import React from 'react';
import { Board } from './components';
import style from './style';

const { button, containerCenter } = style;

function App() {
  return (
    <div className={containerCenter}>
      <Board />

      <button
        type="button"
        className={button}
      >
        Try
      </button>
    </div>
  );
}

export default App;
