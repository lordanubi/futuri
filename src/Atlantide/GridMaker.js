import React from 'react';
import * as Const from '../Const'
import LineMaker from './LineMaker'
function GridMaker(props) {
  let vertical = props.set.vertical, horizontal = props.set.horizontal,
  hSpacing = horizontal.spacing * Const.spacing, maxX,
  vSpacing = vertical.spacing * Const.spacing, maxY

  //Grid viewBox calcs
  if (horizontal.evenOddVerticalFlip)
    maxX = Const.logoWidth * horizontal.atoms + hSpacing * (horizontal.atoms - 1) - Const.logoWidth/2 * (horizontal.atoms - 1)
  else
    maxX = Const.logoWidth * horizontal.atoms + hSpacing * (horizontal.atoms - 1)
  maxY = Const.logoHeight * vertical.atoms + vSpacing * (vertical.atoms -1)
        
  return (<svg id={props.set.id} preserveAspectRatio="xMidYMid slice" viewBox={"0 0 " + maxX + " " + maxY}>
    {Array.from(Array(horizontal.atoms), (e, i) => { let classes = [], mirrorHor, mirrorVer, LineProps, phase,x
      
      //EVENODD PERIODIC BEHAVIOUR
      if(Const.periodBehaviour(i)) {
        classes.push('frequentLine')

        //FLIP VERTICAL
        if (horizontal.evenOddVerticalFlip)
          mirrorVer = true
        //PHASING
        if (horizontal.phase === 'periodic')
          phase = {y: (Const.logoHeight+vSpacing)/2}
      }

      //QUASIPERIODIC BEHAVIOUR
      if(Const.quasiPeriodBehaviour(i)) {
        classes.push('quasirareLine')

        //FLIP HORIZONTAL
        if (horizontal.quasiPeriodicHorizontalFlip)
          mirrorHor = true
        //PHASING
        if (horizontal.phase === 'quasiperiodic')
          phase = {y: (Const.logoHeight+vSpacing)/2}
      }

      //rare behaviour [quasiperiod and evenodd period matching]
      if(Const.quasiPeriodBehaviour(i) && Const.periodBehaviour(i)) {
        classes.push('rareLine')
      }

      //constant behaviour [for the whole Line]
      if (!props.set.chaotic)
        LineProps = {mirrorVer: mirrorVer, mirrorHor: mirrorHor}
      else
        LineProps = {mirrorHor: mirrorVer, mirrorVer: mirrorHor}
      //Line at position i get printed
      if (horizontal.evenOddVerticalFlip)
        x = (Const.logoWidth/2 + hSpacing) * i
      else 
        x = (Const.logoWidth + hSpacing) * i
      return(<LineMaker {...phase} x={x} set={vertical} {...LineProps} key={i} //classes={classes.join(' ')}
              />)
    })}
  </svg>)
}
export default GridMaker