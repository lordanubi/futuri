import React from 'react'
import Atom from '../../Atom/Atom'
import Repeat from '../../Atlantide/Repeat'
import RVG from '../../Atlantide/SvgRender/RVG'
function PixelGrid({x,y,mirrorHor, mirrorVer, spacing, width, height, flow})  {
  return <Repeat x={x} y={y} mirrorHor={mirrorHor} mirrorVer={mirrorVer} times={width} flow={flow} spacing={spacing}><PixelLine /></Repeat> 
}
export default RVG(PixelGrid)