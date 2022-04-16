import React, {useRef, cloneElement} from "react"
import getChildPropsAtNumber from "./SvgRender/Functions/getChildPropsAtNumber"
import useDimensions from "./SvgRender/Functions/useDimensions"

function Repeat({x = 0,y = 0, mirrorHor, mirrorVer,children,spacing = 0, times = 1, evenOddVerticalFlip = true, phase = false, quasiPeriodicHorizontalFlip = true, flow = 'vertical'}) {
  const ref = useRef()
  const [childWidth, childHeight] = useDimensions(ref)
  let Child = (updatedProps) =>  cloneElement(children, updatedProps)
  return Array.from(Array(times), (e, i) => {
    let childProps = getChildPropsAtNumber(i, childWidth, childHeight, spacing, evenOddVerticalFlip, phase, quasiPeriodicHorizontalFlip, flow,x,y, mirrorHor, mirrorVer)
    return <g key={i} ref={ref}><Child {...childProps} /></g>
  })
}
export default Repeat