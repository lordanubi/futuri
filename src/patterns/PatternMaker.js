import React from 'react';
import * as Const from '../constants'
import './PatternMaker.scss'
function PatternMaker(props) {
  //l'unità di misura è l'atomo
  var horizontalLogoNumber = props.patternWidth || 1
  var verticalLogoNumber = props.patternHeight || 1

  var patternWidth = (horizontalLogoNumber * Const.logoWidth) + (Const.spacing * (horizontalLogoNumber-1))
  var patternHeight = (verticalLogoNumber * Const.logoHeight) + (Const.spacing * (verticalLogoNumber-1))
  
  return (
    <symbol id={props.name} viewBox={"0 0 " + patternWidth + " " + patternHeight}>
      {props.children}
    </symbol>
  )
}
export default PatternMaker