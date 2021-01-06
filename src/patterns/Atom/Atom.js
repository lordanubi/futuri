import React from 'react';
import Pattern from '../Pattern';
import PatternMaker from '../PatternMaker';

function Atom(props)  {
  if (props.define) {
    return(
      <>
        <PatternMaker name="Atom">
          <polygon className="asign" points="1000,688.2 800,688.2 500,275.3 200,688.2 0,688.2 400,137.6 500,0 600,137.6"/>
          <polygon className="fsign" points="200,412.9 400,688.2 600,688.2 300,275.3"/>
        </PatternMaker>
      </>
    )
  } else {
    return(
      <Pattern name="Atom" {...props} />
    )
  }
}
export default Atom;