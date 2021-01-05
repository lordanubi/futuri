import React from 'react';
import Atom from '../../patterns/Atom/Atom';
import './PatternView.scss';
function PatternView(props)  {
  return(
      <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 688.2" 
      className="PatternView"
      {...props}
    >
      
      <g id="atomReversed">
          <Atom id="atom" />
          <use  href="#atom" x={-500} transform="scale(-1, 1)" />
      </g>


    
      <use href="#atomReversed" y={-688.2} x={+250} transform="scale(1, -1)" />


    </svg>
  )
}
export default PatternView;