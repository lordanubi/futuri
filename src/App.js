import React from 'react';
import './App.css';
import * as Const from './Const'
import AtomDef from './Atom/Def'
import PixelGridDef from './Patterns/PixelGrid/Def'
import PatternView from './Views/PatternView/PatternView';
function App() {
  //in questa parte dell'App verranno caricati tutti i componenti svg che possono essere cachati
  return (
    <>
      <svg className="symbols">
            <AtomDef/>
            <PixelGridDef />
            
      </svg>
      <PatternView />
    </>
  );
}

export default App;
