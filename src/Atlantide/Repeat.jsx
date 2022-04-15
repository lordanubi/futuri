import React, {useLayoutEffect, useState, cloneElement} from "react"
import getChildPropsAtNumber from "./SvgRender/Functions/getChildPropsAtNumber"
import getSizeBeforeReact from "./SvgRender/Functions/getSizeBeforeReact"

function Repeat({children,spacing = 0, times = 1, evenOddVerticalFlip = true, phase = false, quasiPeriodicHorizontalFlip = true}) {
  const [childWidth, setChildWidth] = useState()
  const [childHeight, setChildHeight] = useState()
  useLayoutEffect(() => {
    let size = getSizeBeforeReact(children)
    setChildWidth(size.width)
    setChildHeight(size.height)
  },[])

  //let childWidth = 1609
  //let childHeight = 1106
  let Child = (updatedProps) => cloneElement(children, updatedProps)
  return Array.from(Array(times), (e, i) => {
    let childProps = getChildPropsAtNumber(i, childWidth, childHeight, spacing, evenOddVerticalFlip, phase, quasiPeriodicHorizontalFlip)
    return <Child key={i} {...childProps} />
  })
}
export default Repeat