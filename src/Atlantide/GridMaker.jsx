import React from 'react';
import * as Const from '../Const'
import Repeat from './Repeat'

function GridMaker(props) {
  let vertical = props.set.vertical, horizontal = props.set.horizontal,
  hSpacing = horizontal.spacing, vSpacing = vertical.spacing
  
  return Array.from(Array(horizontal.atoms), (e, i) => { let classes = [], mirrorHor, mirrorVer, ColumnProps, phase,x

      //EVENODD PERIODIC BEHAVIOUR
      if(Const.periodBehaviour(i)) {
        classes.push('frequentColumn')

        //FLIP VERTICAL
        if (horizontal.evenOddVerticalFlip)
          mirrorVer = true
        //PHASING
        if (horizontal.phase === 'periodic')
          phase = {y: (props.children.type.height+vSpacing)/2}
      }

      //QUASIPERIODIC BEHAVIOUR
      if(Const.quasiPeriodBehaviour(i)) {
        classes.push('quasirareColumn')

        //FLIP HORIZONTAL
        if (horizontal.quasiPeriodicHorizontalFlip)
          mirrorHor = true
        //PHASING
        if (horizontal.phase === 'quasiperiodic')
          phase = {y: (props.children.type.height+vSpacing)/2}
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

      if (horizontal.evenOddVerticalFlip)
        x = (props.children.type.width/2 + hSpacing) * i
      else 
        x = (props.children.type.width + hSpacing) * i
      
      //Column at position i get printed
      return(<Repeat {...phase} x={x} {...vertical} {...ColumnProps} key={i} //classes={classes.join(' ')}
              >{props.children}</Repeat>)
    })
}
function getBound(child) {

}
export default GridMaker