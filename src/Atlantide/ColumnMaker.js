import React from 'react';
import * as Const from '../Const'

function ColumnMaker(props) {
  const numberOfAtoms = props.set.atoms, spacing = props.set.spacing * Const.spacing
    return <g className={props.classes + ' column'} y={props.y} transform={'translate(' +props.x + ')'}>
              {Array.from(Array(numberOfAtoms), (e, i) => {let classes = [],scaleX = 1, scaleY = 1, atomProps, phase

                //EVENODD PERIODIC BEHAVIOUR
                if(Const.periodBehaviour(i)) {
                  classes.push('frequentAtom')
                  //FLIP VERTICAL
                  if (props.set.evenOddVerticalFlip)
                    scaleY = -1
                  //PHASING
                  if (props.set.phase === 'periodic')
                    phase = {x: -(Const.logoWidth+spacing)/2}
                }

                //QUASIPERIODIC BEHAVIOUR
                if(Const.quasiPeriodBehaviour(i)) {
                  classes.push('quasirareAtom')
                  //FLIP HORIZONTAL
                  if (props.set.quasiPeriodicHorizontalFlip)
                    scaleX = -1
                  //PHASING
                  if (props.set.phase === 'quasiperiodic')
                    phase = {x: -(Const.logoWidth+spacing)/2}
                }

                //rare behaviour [quasiperiod and evenodd period matching]
                if(Const.quasiPeriodBehaviour(i) && Const.periodBehaviour(i)) {
                  classes.push('rareAtom')
                }

                //constant behaviour [for the whole Column]
                if (props.mirrorVer)
                  scaleY =  -scaleY
                if (props.mirrorHor)
                  scaleX =  -scaleX
                
                if (scaleX === -1 || scaleY === -1) 
                atomProps = {style: {'--transf' : 'scale(' + scaleX + ',' + scaleY + ')'}}
                
                let y = (Const.logoHeight + spacing) * i
                //Atom at position i get printed
                return(<use className={classes.join(' ')} y={y} href="#Atom" {...phase} {...atomProps} key={i}/>)
              })}
            </g>
}
export default ColumnMaker