import React from 'react'
import getSizeOnServer from './Functions/getSizeOnServer'
function Interface({children, image,fixed, viewBoxWidth, viewBoxHeight, width, height}) {
    let serverWidth, serverHeight
      //const serverBBox = getSizeOnServer(children)
      serverWidth = 1607 || serverBBox?.width
      serverHeight = 11000 || serverBBox?.height
    return <svg width={width} height={height} preserveAspectRatio={fixed ? 'xMidYMid slice' : undefined} viewBox={`0 0 ${viewBoxWidth || serverWidth || 0} ${viewBoxHeight || serverHeight || 0}`} xmlns={image ? "http://www.w3.org/2000/svg" : undefined}>{children}</svg>
}
export default Interface