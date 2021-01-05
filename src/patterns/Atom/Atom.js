import React from 'react';
import './Atom.scss';
function Atom(props)  {
  return(
    <g {...props} className="Atom">
		<polygon className="asign" points="1000,688.2 800,688.2 500,275.3 200,688.2 0,688.2 400,137.6 500,0 600,137.6 		"/>
		<polygon className="fsign" points="200,412.9 400,688.2 600,688.2 300,275.3 		"/>
      </g>
      /* VECCHIO LOGO
      <path
        id="dxline"
        className="white"
        d="M400 137.6L500 0l500 688.2H800z"
      />
      <path
        id="sxline"
        className="white"
        d="M0 688.2L500 0l100 137.6-400 550.6z"
      />
      <path
        id="centerline"
        fill="gold"
        d="M200 412.9l200 275.3h200L300 275.3z"
      /> */
  )
}
export default Atom;