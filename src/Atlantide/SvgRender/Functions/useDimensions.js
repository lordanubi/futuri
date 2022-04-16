import { useState, useCallback,useLayoutEffect } from 'react'

function useDimensions(ref) {
  const [autoWidth, setWidth] = useState()
  const [autoHeight, setHeight] = useState()
  useLayoutEffect(() => {
    const box = ref.current.getBBox()
    setWidth(Math.round(box.width))
    setHeight(Math.round(box.height))
  })
  return [autoWidth, autoHeight]
}
export default useDimensions