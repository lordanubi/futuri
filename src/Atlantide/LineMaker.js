import React from 'react';
import * as Const from '../Const'
import './LineMaker.scss'
function LineMaker(props) {
  //pattern maker riceve il parametro essenziale ovvero il numero di atomi che formano il pattern
  var numberOfAtoms = props.atoms | 1
  let spacing = (props.spacing | 1) * Const.spacing
  function getSignAt(n) {
    return (2-(Math.floor((n+2)* Const.phi)-Math.floor((n+1)*Const.phi)))
  }

  let SemiLine = () => {
    return Array.from(Array(numberOfAtoms), (e, i) => {
      let state = getSignAt(i)
      state ^= props.reversed;
      if(state === 0 || state===1) {
        return (<use key={i} x={(Const.logoWidth + spacing*4) * i} href="#Atom"/>)
      } else {
        return(<use key={i} x={(Const.logoWidth + spacing*4) * i} href="#Atom" className="mirrorHor" />)
      }
    })
  }
  //se la direttiva ci dice di usare coppie avviciniamo i gruppi delle due semiline
  var multiplier = props.withCouples ? 1 : 2
  return (
    <>
      <symbol id="SemiLine">
        <SemiLine />
      </symbol>
      <symbol id="Line">
        <use href="#SemiLine" />
        <use x={Const.logoWidth/2 + spacing*multiplier} className="mirrorVer" href="#SemiLine" />
      </symbol>
    </>
    
    )
}
export default LineMaker