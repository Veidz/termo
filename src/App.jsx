import React from 'react';
import { Board, SubmitButton } from './components';
import TermoProvider from './context/TermoProvider';
import style from './style';

const { containerCenter } = style;

function App() {
  return (
    <TermoProvider>
      <div className={containerCenter}>
        <Board />
        <SubmitButton />
      </div>
    </TermoProvider>
  );
}

export default App;
