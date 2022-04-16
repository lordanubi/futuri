import React, {cloneElement} from "react"
import getChildPropsAtNumber from "./SvgRender/Functions/getChildPropsAtNumber"

function Repeat({x = 0,y = 0, mirrorHor, mirrorVer,children,spacing = 0, times = 1, evenOddVerticalFlip = true, phase = false, quasiPeriodicHorizontalFlip = true, flow = 'vertical'}) {
  let childHeight = children.type.height
  let childWidth = children.type.width
  let Child = (updatedProps) =>  cloneElement(children, updatedProps)
  return Array.from(Array(times), (e, i) => {
    let childProps = getChildPropsAtNumber(i, childWidth, childHeight, spacing, evenOddVerticalFlip, phase, quasiPeriodicHorizontalFlip, flow,x,y, mirrorHor, mirrorVer)
    return <Child key={i} {...childProps} />
  })
}
export default Repeat