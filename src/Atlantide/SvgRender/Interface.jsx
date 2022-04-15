import React, {useRef} from 'react'
import useDimensions from './Functions/useDimensions'
function Interface({children, image,fixed, viewBoxWidth, viewBoxHeight, width, height}) {
    const ref = useRef()
    const [autoWidth, autoHeight] = useDimensions(ref)
    return <svg ref={ref} width={width} height={height} preserveAspectRatio={fixed ? 'xMidYMid slice' : undefined} viewBox={`0 0 ${viewBoxWidth || autoWidth || 0} ${viewBoxHeight || autoHeight || 0}`} xmlns={image ? "http://www.w3.org/2000/svg" : undefined}>{children}</svg>
}
export default Interface