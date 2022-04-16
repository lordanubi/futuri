import {periodBehaviour, quasiPeriodBehaviour} from '../../../Const'

function getChildPropsAtNumber(i, childWidth, childHeight, spacing, evenOddVerticalFlip, phase, quasiPeriodicHorizontalFlip, flow,xStart,yStart, mirrorHor, mirrorVer) {
  
  let scaleY = mirrorVer ? -1 : 1
  let scaleX =  mirrorHor ? -1 : 1
  //let scaleX = 1, scaleY = 1
  let y = flow==='vertical' ? (childHeight + spacing) * i : 0
  let x = flow==='horizontal' ? (childWidth/2 + spacing) * i : 0
  //EVENODD PERIODIC BEHAVIOUR
  if (periodBehaviour(i) && evenOddVerticalFlip) scaleY = -scaleY; 
  //QUASIPERIODIC BEHAVIOUR
  if (quasiPeriodBehaviour(i) && quasiPeriodicHorizontalFlip) scaleX = -scaleX; 
  
  return {x: x+xStart, y: y+yStart, mirrorHor: scaleX === -1, mirrorVer: scaleY === -1}
}
export default getChildPropsAtNumber

















// function getChildPropsAtNumber(i, childWidth, childHeight, spacing, evenOddVerticalFlip, phase, quasiPeriodicHorizontalFlip) {

//   let scaleX = 1, scaleY = 1, x = 0, y = (childHeight + spacing) * i //default element props
//   if (Const.periodBehaviour(i)) { //EVENODD PERIODIC BEHAVIOUR
//     if (evenOddVerticalFlip) scaleY = -1; //FLIP VERTICAL
//     if (phase === "periodic") x -= distance / 2; //Move even atoms a bit to the left
//   }

//   if (Const.quasiPeriodBehaviour(i)) { //QUASIPERIODIC BEHAVIOUR
//     if (quasiPeriodicHorizontalFlip) scaleX = -1; //FLIP HORIZONTAL
//     if (phase === "quasiperiodic") x -= distance / 2;
//   }
//   return {x: x, y: y, mirrorHor: scaleX === -1, mirrorVer: scaleY === -1}
// }