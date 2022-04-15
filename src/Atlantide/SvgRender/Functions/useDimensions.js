import { useState, useCallback,useEffect } from 'react'

function useDimensions(ref) {
  const [autoWidth, setWidth] = useState()
  const [autoHeight, setHeight] = useState()
  useEffect(() => {
    const box = ref.current.getBBox()
    setWidth(Math.round(box.width))
    setHeight(Math.round(box.height))
  }, [ref.current])
  return [autoWidth, autoHeight]
}
export default useDimensions