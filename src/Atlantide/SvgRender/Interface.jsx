import React, {useState} from 'react'

function Interface({children, image,fixed, width, height}) {
  const [autoWidth, setWidth] = useState();
  const [autoHeight, setHeight] = useState();
  const svg = React.useCallback(node => {
    if (node !== null) {
      const box = node.getBBox()
      setWidth(box.width)
      setHeight(box.height)
    }
  }, []);

    return <svg preserveAspectRatio={fixed ? 'xMidYMid slice' : undefined} viewBox={`0 0 ${width || autoWidth || 0} ${height || autoHeight || 0}`} ref={svg} xmlns={image ? "http://www.w3.org/2000/svg" : undefined}>{children}</svg>
}
export default Interface