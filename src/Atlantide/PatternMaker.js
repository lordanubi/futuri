import React from 'react';
import * as Const from '../Const'
import LineMaker from './LineMaker'
import './PatternMaker.css'
function PatternMaker(props) {
  let vertical = props.set.vertical, horizontal = props.set.horizontal, spacing = vertical.spacing * Const.spacing
  return (<>
    {Array.from(Array(vertical.atoms), (e, i) => { let classes = [], mirrorHor, mirrorVer, lineProps, phase
      
      //EVENODD PERIODIC BEHAVIOUR
      if(Const.periodBehaviour(i)) {
        classes.push('frequentLine')

        //FLIP VERTICAL
        if (vertical.evenOddVerticalFlip)
          mirrorVer = true
        //PHASING
        if (vertical.phase === 'periodic')
          phase = {x: -(Const.logoWidth+spacing)/2}
      }

      //QUASIPERIODIC BEHAVIOUR
      if(Const.quasiPeriodBehaviour(i)) {
        classes.push('quasirareLine')

        //FLIP HORIZONTAL
        if (vertical.quasiPeriodicHorizontalFlip)
          mirrorHor = true
        //PHASING
        if (vertical.phase === 'quasiperiodic')
          phase = {x: -(Const.logoWidth+spacing)/2}
      }

      //rare behaviour [quasiperiod and evenodd period matching]
      if(Const.quasiPeriodBehaviour(i) && Const.periodBehaviour(i)) {
        classes.push('rareLine')
      }

      //constant behaviour [for the whole line]
      if (!props.set.chaotic)
        lineProps = {mirrorVer: mirrorVer, mirrorHor: mirrorHor}
      else
        lineProps = {mirrorHor: mirrorVer, mirrorVer: mirrorHor}
      //Line at position i get printed
      return(<LineMaker {...phase} y={(Const.logoHeight + spacing) * i} set={horizontal} classes={classes.join(' ')} {...lineProps} key={i}/>)
    })}
  </>)
}
export default PatternMaker