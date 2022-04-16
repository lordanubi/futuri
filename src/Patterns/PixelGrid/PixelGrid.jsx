import React from 'react'
import Use from '../../Atlantide/SvgRender/SimpleTools/Use'
import Repeat from '../../Atlantide/Repeat'
import RVG from '../../Atlantide/SvgRender/RVG'
function PixelGrid({x,y,mirrorHor, mirrorVer, spacing, width, height, flow})  {
  return <Repeat x={x} y={y} mirrorHor={mirrorHor} mirrorVer={mirrorVer} times={width} flow={flow} spacing={spacing}><Use id="PixelLine" /></Repeat> 
}
export default RVG(PixelGrid)