import React, {useEffect, useState} from 'react';
import * as Const from '../Const'
import Shadow from '../Atlantide/SvgRender/Shadow'
import PintSVG from '../Atlantide/SvgRender/PrintSVG'
let count = 0
function Path(props) {
        const [firstInstance, setFirstInstance] = useState(false)
        useEffect(() => { setFirstInstance(count++ === 0); return () => { count-- } }, [])
        const s = Const.spacing, h = Const.logoHeight
        const relPoints = `m${s*3 + (props.x || 0)} ${h - Const.magicRatio(s*2) + (props.y || 0)}l${s} ${h-Const.magicRatio(s*8)}h${s*2}l-${s*2} -${h-Const.magicRatio(s*6)}l${s} -${h-Const.magicRatio(s*8)}l${s*3} ${h-Const.magicRatio(s*4)}h${s*2}l-${s*5} -${h}l-${s*5} ${h}h${s*2}z`  
        const path = <path id="Path" d={relPoints} style={props.style} />
        const style = `path {
            transform-box: fill-box;
            transform-origin: center;
            transform: var(--t);
            stroke: var(--c, white);
            stroke-width: ${Const.spacing/10*2};
            fill: none;`
        return (firstInstance || props.firstInstance) ? <><style>{style}</style>{path}</> : path
}

function Atom(props)  {
    let transform = {...(props.mirroring) && {'--t' : props.mirroring}}
    let color = {...(props.color) && {'--c' : props.color}}

    //SHADOW COMPONENT
    if (props.shadow)
        return(<Shadow style={{...transform, ...color}} {...props}><Path /></Shadow>)

    //IMAGE COMPONENT
    else if (props.image)
        return (<PrintSVG style={{...transform, ...color}} {...props}><Path /></PrintSVG>)

    //RAW COMPONENT
    else
        return(<Path style={{...transform, ...color}} {...props} />)

}
export default Atom