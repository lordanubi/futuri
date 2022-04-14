import React, {useState} from 'react'

function Interface({children, image,fixed, viewBoxWidth, viewBoxHeight, width, height}) {
  const [autoWidth, setWidth] = useState();
  const [autoHeight, setHeight] = useState();
  const handleRef = React.useCallback(node => {
    if (node !== null) {
      const box = node.getBBox()
      setWidth(Math.round(box.width))
      setHeight(Math.round(box.height))
    }
  }, []);

    return <svg ref={handleRef} width={width} height={height} preserveAspectRatio={fixed ? 'xMidYMid slice' : undefined} viewBox={`0 0 ${viewBoxWidth || autoWidth || 0} ${viewBoxHeight || autoHeight || 0}`} xmlns={image ? "http://www.w3.org/2000/svg" : undefined}>{children}</svg>
}
export default Interface