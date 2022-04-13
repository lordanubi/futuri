import React, {useState} from 'react'

function Interface({children, image,fixed, viewBoxWidth, viewBoxHeight, width, height, x,y}) {
  const [autoWidth, setWidth] = useState();
  const [autoHeight, setHeight] = useState();
  const svg = React.useCallback(node => {
    if (node !== null) {
      const box = node.getBBox()
      setWidth(box.width)
      setHeight(box.height)
    }
  }, []);

    return <svg y={y} width={width} height={height} preserve-aspect-ratio={fixed ? 'xMidYMid slice' : undefined} viewBox={`0 0 ${viewBoxWidth || autoWidth || 0} ${viewBoxHeight || autoHeight || 0}`} ref={svg} xmlns={image ? "http://www.w3.org/2000/svg" : undefined}>{children}</svg>
}
export default Interface