import React from "react"
import getChildPropsAtNumber from "./SvgRender/Functions/getChildPropsAtNumber"

function Repeat({children,spacing = 0, times = 1, evenOddVerticalFlip = true, phase = false, quasiPeriodicHorizontalFlip = true}) {
  let childHeight = React[children.type.name]?.height
  let childWidth = React[children.type.name]?.width
  let Child = (updatedProps) => React.cloneElement(children, updatedProps)
  return Array.from(Array(times), (e, i) => {
    return <Child key={i} {...getChildPropsAtNumber(i, childWidth, childHeight, spacing, evenOddVerticalFlip, phase, quasiPeriodicHorizontalFlip)} />
  })
}
export default Repeat