import * as Const from '../../../Const'
function getChildPropsAtNumber(i, childWidth, childHeight, spacing, evenOddVerticalFlip, phase, quasiPeriodicHorizontalFlip) {
  let scaleX = 1, scaleY = 1, x = 0, y = (childHeight + spacing) * i //default element props
  if (Const.periodBehaviour(i)) { //EVENODD PERIODIC BEHAVIOUR
    if (evenOddVerticalFlip) scaleY = -1; //FLIP VERTICAL
    if (phase === "periodic") x -= (childWidth + spacing) / 2; //Move even atoms a bit to the left
  }

  if (Const.quasiPeriodBehaviour(i)) { //QUASIPERIODIC BEHAVIOUR
    if (quasiPeriodicHorizontalFlip) scaleX = -1; //FLIP HORIZONTAL
    if (phase === "quasiperiodic") x -= (childWidth + spacing) / 2;
  }
  return {x: x, y: y, mirrorHor: scaleX === -1, mirrorVer: scaleY === -1}
}
export default getChildPropsAtNumber