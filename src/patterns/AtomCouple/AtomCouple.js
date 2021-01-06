import React from 'react';
import Pattern from '../Pattern';
import PatternMaker from '../PatternMaker';
import Atom from '../Atom/Atom';

/* AtomCouple: 1x2x1 logo + logo specchiato orizzontalmente */
function AtomCouple(props)  {
  if (props.define) {
    return(
    <>
      <Atom define />
      <PatternMaker name="AtomCouple" patternWidth={2}>
        <Atom />
        <Atom horizontalReflect />
      </PatternMaker>
    </>
    )
  } else {
    return(
      <Pattern name="AtomCouple" {...props}/>
    )
  }
}
export default AtomCouple;
