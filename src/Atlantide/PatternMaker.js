import React from 'react';
import * as Const from '../Const'
import LineMaker from './LineMaker'
import './PatternMaker.scss'
function PatternMaker(props) {
  //pattern maker riceve il parametro essenziale ovvero il numero di atomi che formano il pattern
  let numberOfAtoms = props.atoms | 1
  let spacing = (props.Vspace | 1) * Const.spacing
  function getSignAt(n) {
    return (2-(Math.floor((n+2)* Const.phi)-Math.floor((n+1)*Const.phi)))
  }
  let content = []
  for (let i = 0; i < numberOfAtoms - 1; i++) {
    if(getSignAt(i) === 0)
      content.push(<use y={(Const.logoHeight + spacing) * i} href="#Line"/>)
    else
    content.push(<use y={(Const.logoHeight + spacing) * -i} href="#Line" className="mirrorVer" />)
  }
  return (<><LineMaker spacing={props.Hspace} atoms={numberOfAtoms} withCouples={props.withCouples} />{content}</>)
}
export default PatternMaker