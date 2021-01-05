import React from 'react';
import Atom from '../../patterns/Atom/Atom';
import {HorizontalReflect, VerticalReflect,logoHeight} from './PatternUtils';
import './PatternView.scss';
function PatternView(props)  {
  return(
      <svg
      width="100%"
      height="100%"
      viewBox={"0 0 1000 " + logoHeight}
      className="PatternView"
      {...props}
    >
      <defs>
        <Atom id="atom" />
      </defs>
      <VerticalReflect source="atom">

      </VerticalReflect>
    </svg>
  )
}
export default PatternView;