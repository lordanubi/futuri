import React, {useState,useEffect} from 'react';
import RVG from '../Atlantide/SvgRender/RVG'
import * as Const from '../Const'

const logoWidth = 1607.6
const logoHeight = Const.magicRatio(logoWidth)
function Atom({x, y ,innerRef, color, mirrorHor, mirrorVer}) {
    const [isActive, setActive] = useState(false);const toggleClass = () => {setActive(!isActive);}; //se l'atomo è stato cliccato

    let points
    if (mirrorHor && mirrorVer)
        points = `m${logoWidth + (x || 0)} ${(y || 0)}l-803.8,${logoHeight}l-803.8,-${logoHeight}h347.6l146.8,202l146.8,-202h347.6l-320.6,441.3l135.6,186.5l456.2,-627.8h347.6l0,0zm-331.9,30.9l-471.9,649.6l-173.8,-239.2l298.1,-410.4h-271.1l-162.6,223.7l-162.6,-223.7h-271.1l743.1,1022.8l743,-1022.8l-271.1,0l0,0z`
    else if (mirrorVer)
        points = `m${logoWidth + (x || 0)} ${(y || 0)}l-803.8,${logoHeight}l-803.8,-${logoHeight}h347.6l146.8,202l146.8,-202h347.6l-320.6,441.3l135.6,186.5l456.2,-627.8h347.6l0,0zm-331.9,30.9l-471.9,649.6l-173.8,-239.2l298.1,-410.4h-271.1l-162.6,223.7l-162.6,-223.7h-271.1l743.1,1022.8l743,-1022.8l-271.1,0l0,0z`
    else if (mirrorHor)
        points = `m${(x || 0)} ${logoHeight + (y || 0)}l803.8,-${logoHeight}l803.8,${logoHeight}h-347.6l-146.8,-202l-146.8,202h-347.6l320.6,-441.3l-135.6,-186.5l-456.2,627.8h-347.6l0,0zm331.9,-30.9l471.9,-649.6l173.8,239.2l-298.1,410.4h271.1l162.6,-223.7l162.6,223.7h271.1l-743.1,-1022.8l-743,1022.8l271.1,0l0,0z`
    else
        points = `m${logoWidth + (x || 0)} ${logoHeight + (y || 0)}h-347.6l-456.2 -627.8l-135.6 186.5l320.6 441.3h-347.6l-146.8 -202l-146.8 202h-347.6l803.8 -${logoHeight}l803.8 ${logoHeight}zm-331.9 -30.9h271.1l-743 -1022.8l-743.1 1022.8h271.1l162.6 -223.7l162.6 223.7h271.1l-298.1 -410.4l173.8 -239.2l471.9 649.6z` 
    
    return <path fill={color || undefined} ref={innerRef} className={isActive ? 'selected': null} onClick={toggleClass} d={points} /> //id should be added even if not explicit here
}
Atom.css = `path {fill: var(--gold); transform-box: fill-box; transform-origin: center; transform: var(--t);}`
Atom.width = logoWidth
Atom.height = logoHeight
Atom.useShadow = false

export default RVG(Atom)