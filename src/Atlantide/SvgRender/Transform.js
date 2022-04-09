import React from 'react';

function Transform({children,mirrorHor, mirrorVer,x,y}) {
    return <g transform={`translate(${x},${y}) scale(${mirrorHor ? -1 : 1}, ${mirrorVer ? -1 : 1})`}>{children}</g>
}
export default Transform