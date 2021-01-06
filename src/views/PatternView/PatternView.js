import React from 'react';
import Atom from '../../patterns/Atom/Atom';
import './PatternView.scss';
  //brand costants
  var logoWidth = 1000
  var logoHeight = 688.2
  var spacing = logoWidth/5

function Pattern(props) {
  //l'unità di misura è l'atomo
  var patternWidth = props.patternWidth ? props.patternWidth : 1
  var patternHeight = props.patternHeight ? props.patternHeight : 1
  
  return (
    <symbol id={props.name} viewBox={"0 0 " + logoWidth * patternWidth + " " + logoHeight*patternHeight}>
      {props.children}
    </symbol>
  )
}
function PatternView(props)  {
  return(
      <svg className="PatternView" {...props}>
        <defs>

          {/* Atomo */}
          <Pattern name="Atom">
            <Atom/>
          </Pattern>

          {/* BasicCouple: logo normale + logo specchiato */}
          <Pattern name="BasicCouple" patternWidth={2}>
            <use href="#Atom" />
            <use href="#Atom" className="mirrorHor" x={logoWidth+spacing} />
          </Pattern>

          {/* BasicLine: loghi orrizontalmente riflessi alernati */}
          <Pattern name="BasicLine" patternWidth={4} >
            <use href="#BasicCouple" />
            <use href="#BasicCouple" className="mirrorHor" x={-logoWidth-spacing} />
          </Pattern>

          {/* ReflectedBasic: BasicLine verticalmente riflessa */}
          <Pattern name="ReflectedBasic" patternWidth={6} >
            <use href="#BasicLine" x={(logoWidth+spacing)/2} className="mirrorVer" />
          </Pattern>

          {/* CompleteBasic: BasicLine + Reflected Basic */}
          <Pattern name="CompleteBasic" patternWidth={8} >
            <use href="#BasicLine" />
            <use href="#ReflectedBasic" />
          </Pattern>
        </defs>

        {/* Visualizzatore */}
          <use href="#CompleteBasic" />
    </svg>
  )
}
export default PatternView;