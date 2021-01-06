import React from 'react';
import Pattern from '../Pattern';
import PatternMaker from '../PatternMaker';
import AtomCouple from '../AtomCouple/AtomCouple';

/* AtomLine: 1x2x1 logo + logo specchiato orizzontalmente */
function AtomLine(props)  {
  if (props.define) {
    return(
    <>
      <AtomCouple define />
      <PatternMaker name="AtomLine" patternWidth={8}>
        <AtomCouple />
        <AtomCouple horizontalReflect />
      </PatternMaker>
    </>
    )
  } else {
    return(
      <Pattern name="AtomLine" {...props}/>
    )
  }
}
export default AtomLine;
