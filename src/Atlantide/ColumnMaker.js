import React from 'react';
import * as Const from '../Const'

function ColumnMaker(props) {

  let spacing = (props.spacing || 0) * Const.spacing //this maybe should be Component.spacing?
  let oldStyle = props.children.props.style || {}
  
  return Array.from(Array(props.atoms || 1), (e, i) => { //for every atom calculate its postion and mirroring

      //child refernce but we can update its props
      let Child = (updatedProps) =>  React.cloneElement(props.children, updatedProps)

      //some datas
      let scaleX = 1, scaleY = 1
      let xStart = props.x || 0, yStart = props.y || 0 //if not set start drawing at (0;0)
      let componentWidth = props.children.type.width, componentHeight = props.children.type.height

      if (props.evenOddVerticalFlip && props.flow === "horizontal")
        componentWidth = componentWidth/2 //if atoms are horizontal in evenodd vertical flip mode they must be spaced half

      //logic of repetition
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
       //if there's some mirroring happening in this column we invert the scale factors
          scaleY = props.mirrorVer ? -scaleY : scaleY
          scaleX =  props.mirrorHor ? -scaleX : scaleX
          yStart += (componentHeight + spacing) * i
        
          let inlineStyle = {...(scaleX === -1 | scaleY === -1) && {
            '--t': `scale(${scaleX},${scaleY})`
          }}
          
          //Atom at position i get printed
          return <Child y={yStart} x={xStart} style={{...oldStyle, ...inlineStyle}} key={i}/>
        })
}
export default ColumnMaker