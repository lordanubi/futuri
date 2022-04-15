import React from 'react'
import getOptimizedScale from '../Functions/getOptimizedScale'

function Transform({children,mirrorHor, mirrorVer,x,y,size,from}) {
    let scaleFactor = size || 1
    let scaleX = mirrorHor ? -scaleFactor : scaleFactor
    let scaleY = mirrorVer ? -scaleFactor : scaleFactor
    let optimizedScale = getOptimizedScale(scaleX,scaleY)
    let scale = ((mirrorHor || mirrorVer || size))  ? `scale(${optimizedScale})` : ''
    let translate = (x || y) ? `translate(${x || 0},${y || 0})` : ''
    return <g transform-origin={from ? 'center' : undefined} transform={`${translate}${scale}` || undefined}>{children}</g>
}
export default Transform