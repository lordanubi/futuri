import React from 'react';
import './PatternView.scss';
import * as Const from '../../Const'
import PatternMaker from '../../Atlantide/PatternMaker'
function PatternView(props)  {
  let patternSettings = {
    horizontal: {
      spacing: 2,
      atoms: 100,
      quasiPeriodicHorizontalFlip: true,
      evenOddVerticalFlip: true,
      phase: false
    },
    vertical: {
      spacing: 2,
      atoms: 50,
      quasiPeriodicHorizontalFlip: true,
      evenOddVerticalFlip: true,
      phase: 'quasiperiodic'
    },
    withCouples: false,
    chaotic: false
  }
  return(
    <svg viewBox={"0 0 " + Const.logoWidth + " " + Const.logoHeight} className="svgViewer">
      <PatternMaker set={patternSettings} />
    </svg>
  )
}
export default PatternView;