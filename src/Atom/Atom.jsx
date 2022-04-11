import React, {useState,useEffect} from 'react';
import RVG from '../Atlantide/SvgRender/RVG'
import * as Const from '../Const'

const logoWidth = 1607.6
const logoHeight = Const.magicRatio(logoWidth)
function Atom(props) {
    const {x, y ,innerRef, color} = props
    const [isActive, setActive] = useState(false);const toggleClass = () => {setActive(!isActive);}; //se l'atomo è stato cliccato

    let points = `m${logoWidth + (x || 0)} ${logoHeight + (y || 0)}h-347.6l-456.2 -627.8l-135.6 186.5l320.6 441.3h-347.6l-146.8 -202l-146.8 202h-347.6l803.8 -${logoHeight}l803.8 ${logoHeight}zm-331.9 -30.9h271.1l-743 -1022.8l-743.1 1022.8h271.1l162.6 -223.7l162.6 223.7h271.1l-298.1 -410.4l173.8 -239.2l471.9 649.6z` 

    return <path fill={color || undefined} ref={innerRef} className={isActive ? 'selected': null} onClick={toggleClass} d={points} /> //id should be added even if not explicit here
}
Atom.css = `path.selected {stroke: #ffc200;}`
Atom.width = logoWidth
Atom.height = logoHeight
Atom.useShadow = true

export default RVG(Atom)