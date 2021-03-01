import React from 'react';
import './App.css';
import * as Const from './Const'
import Atom from './Atom/Atom'
import PatternView from './views/PatternView/PatternView';
function App() {
  return (
    <>
      <svg className="symbol">
        <symbol id="Atom" viewBox={"0 0 " + Const.logoWidth + " " + Const.logoHeight}>
            <Atom />
        </symbol>
      </svg>
      <PatternView />
    </>
  );
}

export default App;
