import React from 'react'
import Atom from '../../Atom/Atom'
import Repeat from '../../Atlantide/Repeat'
import RVG from '../../Atlantide/SvgRender/RVG'
function PixelLine({x,y,mirrorHor, mirrorVer, spacing, atoms, flow})  {
  return <Repeat x={x} y={y} mirrorHor={mirrorHor} mirrorVer={mirrorVer} times={atoms} flow={flow} spacing={spacing}><Atom /></Repeat> 
}
PixelLine.useShadow = false
export default RVG(PixelLine)