import React from 'react';
import RVG from '../Atlantide/SvgRender/RVG'


function Button({x, y, ...props}) {
        return <circle r={500} cx={x} cy={y} />
}
Button.css = `circle {fill: red;}`
Button.useShadow = false

export default RVG(Button)