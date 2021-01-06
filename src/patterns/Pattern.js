import React from 'react';
import * as Const from '../constants'
import './PatternMaker.scss'
function Pattern(props) {
  //l'unità di misura è l'atomo
  var horizontalLogoNumber =  props.patternWidth|| 1
  var verticalLogoNumber = props.patternHeight || 1
  
  //controllo se il pattern dev'essere riflesso orizzontalmente
  var computedProps = { href:'#' + props.name}
  if (props.horizontalReflect) {
    
    computedProps = {...computedProps, className: "mirrorHor", x: Const.fullLogoWidth * horizontalLogoNumber}
  }

  return (
    <use {...computedProps}/>
  )
}
export default Pattern