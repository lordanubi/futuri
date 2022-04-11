import React from 'react';

function Transform({children,mirrorHor, mirrorVer,x,y,size}) {
    let scaleFactor = size || 1
    let scale = (mirrorHor || mirrorVer || size) ? `scale(${mirrorHor ? -scaleFactor : scaleFactor}, ${mirrorVer ? -scaleFactor : scaleFactor})` : ''
    let translate = (x || y) ? `translate(${x || 0},${y || 0})` : ''
    return <g transform={`${translate}${scale}` || undefined}>{children}</g>
}
export default Transform