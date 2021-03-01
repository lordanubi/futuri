import React from 'react';
import * as Const from '../Const'
import './LineMaker.css'
function LineMaker(props) {
  var numberOfAtoms = props.set.atoms, spacing = props.set.spacing * Const.spacing
    return <svg className={props.classes + ' line'} y={props.y} x={props.x}>
              {Array.from(Array(numberOfAtoms), (e, i) => {let classes = [],scaleX = 1, scaleY = 1, atomProps, phase

                //EVENODD PERIODIC BEHAVIOUR
                if(Const.periodBehaviour(i)) {
                  classes.push('frequentAtom')
                  //FLIP VERTICAL
                  if (props.set.evenOddVerticalFlip)
                    scaleY = -1
                  //PHASING
                  if (props.set.phase === 'periodic')
                    phase = {y: -(Const.logoHeight+spacing)/2}
                }

                //QUASIPERIODIC BEHAVIOUR
                if(Const.quasiPeriodBehaviour(i)) {
                  classes.push('quasirareAtom')
                  //FLIP HORIZONTAL
                  if (props.set.quasiPeriodicHorizontalFlip)
                    scaleX = -1
                  //PHASING
                  if (props.set.phase === 'quasiperiodic')
                    phase = {y: -(Const.logoHeight+spacing)/2}
                }

                //rare behaviour [quasiperiod and evenodd period matching]
                if(Const.quasiPeriodBehaviour(i) && Const.periodBehaviour(i)) {
                  classes.push('rareAtom')
                }

                //constant behaviour [for the whole line]
                if (props.mirrorVer)
                  scaleY =  -scaleY
                if (props.mirrorHor)
                  scaleX =  -scaleX
                
                if (scaleX === -1 || scaleY === -1) 
                atomProps = {style: {'--transf' : 'scale(' + scaleX + ',' + scaleY + ')'}}


                let x = (Const.logoWidth + spacing) * i
                //Atom at position i get printed
                return(<use className={classes.join(' ')} x={x} href="#Atom" {...phase} {...atomProps} key={i}/>)
              })}
            </svg>
}
export default LineMaker