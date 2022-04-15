import React from "react";
import * as Const from '../Const'
import Atom from './../Atom/Atom'

function Repeat({children,spacing = 0, times = 1, evenOddVerticalFlip = true, phase = false, quasiPeriodicHorizontalFlip = true}) {

  let childHeight = React[children.type.name]?.height
  let childWidth = React[children.type.name]?.width

  let Child = (updatedProps) => React.cloneElement(children, updatedProps)
  return Array.from(Array(times || 1), (e, i) => {
    let scaleX = 1, scaleY = 1, x = 0, y = (childHeight + spacing) * i //default element props

    if (Const.periodBehaviour(i)) { //EVENODD PERIODIC BEHAVIOUR
      if (evenOddVerticalFlip) scaleY = -1; //FLIP VERTICAL
      if (phase === "periodic") x -= (childWidth + spacing) / 2; //Move even atoms a bit to the left
    }

    if (Const.quasiPeriodBehaviour(i)) { //QUASIPERIODIC BEHAVIOUR
      if (quasiPeriodicHorizontalFlip) scaleX = -1; //FLIP HORIZONTAL
      if (phase === "quasiperiodic") x -= (childWidth + spacing) / 2;
    }
    //Atom at position i get printed
    return <g key={i}><Child x={x} y={y} mirrorHor={scaleX === -1} mirrorVer={scaleY === -1} /></g>
  })
}
export default Repeat;

/*
BUG : QUANDO SALVI QUESTO FILE LA PRIMA ISTANZA DI UN COMPONENETE NON SI COMPORTA COME DOVREBBE
POTREBBE ESSERE PERCHE USIAMO UN CLONE ANZICHE L'ISTANZA STESSA
*/
