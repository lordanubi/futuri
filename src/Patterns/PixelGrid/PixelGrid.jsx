import React from 'react'
import Repeat from '../../Atlantide/Repeat'
import RVG from '../../Atlantide/SvgRender/RVG'
import PixelLine from '../PixelLine/PixelLine'

function PixelGrid({x,y,mirrorHor, mirrorVer, spacing, width, height})  {
  return <Repeat x={x} y={y} mirrorHor={mirrorHor} mirrorVer={mirrorVer} times={width} spacing={spacing}>
            <PixelLine spacing={spacing} atoms={height} />
          </Repeat> 
}
export default RVG(PixelGrid)