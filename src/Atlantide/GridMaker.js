import React from 'react';
import * as Const from '../Const'
import ColumnMaker from './ColumnMaker'
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
        
  return Array.from(Array(horizontal.atoms), (e, i) => { let classes = [], mirrorHor, mirrorVer, ColumnProps, phase,x

      //EVENODD PERIODIC BEHAVIOUR
      if(Const.periodBehaviour(i)) {
        classes.push('frequentColumn')

        //FLIP VERTICAL
        if (horizontal.evenOddVerticalFlip)
          mirrorVer = true
        //PHASING
        if (horizontal.phase === 'periodic')
          phase = {y: (Const.logoHeight+vSpacing)/2}
      }

      //QUASIPERIODIC BEHAVIOUR
      if(Const.quasiPeriodBehaviour(i)) {
        classes.push('quasirareColumn')

        //FLIP HORIZONTAL
        if (horizontal.quasiPeriodicHorizontalFlip)
          mirrorHor = true
        //PHASING
        if (horizontal.phase === 'quasiperiodic')
          phase = {y: (Const.logoHeight+vSpacing)/2}
      }

      //rare behaviour [quasiperiod and evenodd period matching]
      if(Const.quasiPeriodBehaviour(i) && Const.periodBehaviour(i)) {
        classes.push('rareColumn')
      }

      //constant behaviour [for the whole Column]
      if (!props.set.chaotic)
        ColumnProps = {mirrorVer: mirrorVer, mirrorHor: mirrorHor}
      else
        ColumnProps = {mirrorHor: mirrorVer, mirrorVer: mirrorHor}
      //Column at position i get printed
      if (horizontal.evenOddVerticalFlip)
        x = (Const.logoWidth/2 + hSpacing) * i
      else 
        x = (Const.logoWidth + hSpacing) * i
      return(<ColumnMaker {...phase} x={x} {...vertical} {...ColumnProps} key={i} //classes={classes.join(' ')}
              >{props.children}</ColumnMaker>)
    })
}
export default GridMaker