import React, {useState} from 'react';
import RVG from '../Atlantide/SvgRender/RVG'
import * as Const from '../Const'
const s = Const.spacing, h = Const.logoHeight

function Atom({x, y, ...props}) {
    const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
        let relPoints = `m${s*3 + (x || 0)} ${h - Const.magicRatio(s*2) + (y || 0)}l${s} ${h-Const.magicRatio(s*8)}h${s*2}l-${s*2} -${h-Const.magicRatio(s*6)}l${s} -${h-Const.magicRatio(s*8)}l${s*3} ${h-Const.magicRatio(s*4)}h${s*2}l-${s*5} -${h}l-${s*5} ${h}h${s*2}z` 
        return <path className={isActive ? 'selected': null} 
        onClick={toggleClass} d={relPoints} {...props} />
        //id should be added even if not explicit here
}
Atom.css = `path {
    transform-box: fill-box;
    transform-origin: center;
    transform: var(--t);
    stroke: var(--c, white);
    stroke-width: ${Const.stroke};
    fill: black;
}
    path.selected {
        stroke: #ffc200;
    }
    `
Atom.width = Const.realLogoWidth
Atom.height = Const.realLogoHeight
Atom.useShadow = false

export default RVG(Atom)