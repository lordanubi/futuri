import React, {useRef, useEffect, useState} from 'react';
import * as Const from '../Const'
import Transform from './SvgRender/SimpleTools/Transform';

function ColumnMaker(props) {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const test = React.useCallback(node => {
    if (node !== null) {
        const box = node.getBBox()
        setHeight(box.height)
        setWidth(box.width)
    }
  }, [])
  let spacing = (props.spacing || 0)
  return Array.from(Array(props.atoms || 1), (e, i) => { //for every atom calculate its postion and mirroring


        //some datas
        let scaleX = 1, scaleY = 1
        let xStart = props.x || 0, yStart = props.y || 0 //if not set start drawing at (0;0)
        let componentHeight = height || props.children.type.height
        let componentWidth = width || props.children.type.width
      if (props.evenOddVerticalFlip && props.flow === "horizontal")
        componentWidth = componentWidth/2 //if atoms are horizontal in evenodd vertical flip mode they must be spaced half (this is actually something based on the shape of the logo and should be decided somewhere else maybe like manually with negative spacing maybe)

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
       //this can be useless and more complicated than it should be, we should have a Flip component now


          scaleY = props.mirrorVer ? -scaleY : scaleY
          scaleX =  props.mirrorHor ? -scaleX : scaleX
          
          yStart += (componentHeight + spacing) * i

          //mirrorHor={scaleX === -1 } mirrorVer={scaleY === -1}
          //x e y vanno cambiati quando c'è uno reflect?

          //x and y could be transform={`translate(${xStart},${yStart})`} as well ma bisognerebbe passarli all' <use>
          //Atom at position i get printed
          return <Transform x={xStart} y={yStart} key={i} mirrorHor={scaleX === -1 } mirrorVer={scaleY === -1}><g ref={test}>{props.children}</g></Transform>
        })
}
export default ColumnMaker


/*
BUG : QUANDO SALVI QUESTO FILE LA PRIMA ISTANZA DI UN COMPONENETE NON SI COMPORTA COME DOVREBBE
POTREBBE ESSERE PERCHE USIAMO UN CLONE ANZICHE L'ISTANZA STESSA
*/