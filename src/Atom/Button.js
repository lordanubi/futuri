import React from 'react';
import RVG from '../Atlantide/SvgRender/RVG'


function Button({x, y, ...props}) {
        return <circle r={20} cx={x} cy={y} {...props} />
}
Button.css = `circle {fill: red;}`














Button.width = 40
Button.height = 40
Button.useShadow = false

export default RVG(Button)