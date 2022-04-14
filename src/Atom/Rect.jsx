import React from 'react';
import RVG from '../Atlantide/SvgRender/RVG'


function Rect({x, y, width, height, color}) {
        return <rect transform={`translate(${-width/2},${-height/2})`} x={x} y={y} width={width} height={height} fill={color} />
}
/*
Rect.width = 1000
Rect.height = 1000
Rect.useShadow = false
*/
Rect.css = 'rect {fill: white;}'

export default RVG(Rect)
