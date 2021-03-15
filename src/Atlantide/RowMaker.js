import React from 'react';
import * as Const from '../Const'
import Atom from '../Atom/Atom.js'
function LineMaker(props) {
  let spacing = (props.spacing || 0) * Const.spacing
  return Array.from(Array(props.atoms || 1), (e, i) => { //for every atom calculate its postion and mirroring
      let scaleX = 1, scaleY = 1
      let xStart = props.x || 0, yStart = props.y || 0 //if not set start drawing at (0;0)
      if (props.flow === 'horizontal')
        [xStart, yStart] = [yStart, xStart]
      let componentWidth = Const.realLogoWidth, componentHeight = Const.realLogoHeight
      if (props.evenOddVerticalFlip && props.flow === "horizontal")
        componentWidth = componentWidth/2 //if atoms are horizontal in evenodd vertical flip mode they must be spaced half
      if (props.flow === 'horizontal') {
              [componentWidth, componentHeight] = [componentHeight, componentWidth]
      }
      if(Const.periodBehaviour(i)) { //EVENODD PERIODIC BEHAVIOUR
        if (props.evenOddVerticalFlip) 
          scaleY = -1 //FLIP VERTICAL

        if (props.phase === 'periodic') 
        xStart -= (componentWidth+spacing)/2  //Move even atoms a bit to the left
      }

      if(Const.quasiPeriodBehaviour(i)) { //QUASIPERIODIC BEHAVIOUR
        if (props.quasiPeriodicHorizontalFlip) 
          scaleX = -1   //FLIP HORIZONTAL
        if (props.phase === 'quasiperiodic')
        xStart -= (componentWidth+spacing)/2
       }
       //if there's some mirroring happening we invert the scale
          scaleY = props.mirrorVer ? -scaleY : scaleY
          scaleX =  props.mirrorHor ? -scaleX : scaleX
          yStart += (componentHeight + spacing) * i
          if (props.flow === 'horizontal')
          [xStart, yStart] = [yStart, xStart]
                //Atom at position i get printed
                return <Atom y={yStart} x={xStart} mirrorHor={scaleX === -1} mirrorVer={scaleY===-1} key={i}/>
              })
}
export default LineMaker