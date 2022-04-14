import React from 'react';

function Transform({children,mirrorHor, mirrorVer,x,y,size,from}) {
    let scaleFactor = size || 1
    let scaleX = mirrorHor ? -scaleFactor : scaleFactor
    let scaleY = mirrorVer ? -scaleFactor : scaleFactor
    let optimizedScale = getOptimizedScale(scaleX,scaleY)
    let scale = ((mirrorHor || mirrorVer || size))  ? `scale(${optimizedScale})` : ''
    let translate = (x || y) ? `translate(${x || 0},${y || 0})` : ''
    return <g transform-origin={from ? 'center' : undefined} transform={`${translate}${scale}` || undefined}>{children}</g>
}
function getOptimizedScale(scaleX,scaleY) {
    let scaleXString = scaleX.toString()
    let scaleYString = scaleY.toString()
    if (scaleXString.charAt(0) === '0') scaleX = scaleXString.substring(1)
    if (scaleYString.charAt(0) === '0') scaleY = scaleYString.substring(1)
    let scale = (scaleX === scaleY) ? scaleX : `${scaleX}, ${scaleY}`
    return scale
}
export default Transform