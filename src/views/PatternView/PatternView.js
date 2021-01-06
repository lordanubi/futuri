import React from 'react';
import './PatternView.scss';
import {Atom, AtomCouple, AtomLine} from '../../patterns'
function PatternView(props)  {
  return(
    <svg>
      <AtomLine define />
      <AtomLine />
    </svg>
  )
}
export default PatternView;