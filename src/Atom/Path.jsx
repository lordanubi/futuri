import React from 'react'
import SVGPathCommander from 'svg-path-commander';

function Path({points, x, y , color, mirrorHor, mirrorVer}) {
    
    return <path fill={color} d={points} /> //id should be added even if not explicit here
}

export default Path