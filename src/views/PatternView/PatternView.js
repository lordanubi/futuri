import React from 'react';
import './PatternView.scss';
import * as Const from '../../Const'
import PatternMaker from '../../Atlantide/PatternMaker'
function PatternView(props)  {
  return(
    <svg viewBox={"0 0 " + Const.logoWidth + " " + Const.logoHeight} className="svgViewer">
      {/* <PatternMaker Hspace={2} Vspace={1.5} atoms={30}  withCouples/> */}
      <PatternMaker Hspace={1.8} Vspace={1.8} atoms={30} />
    </svg>
  )
}
export default PatternView;