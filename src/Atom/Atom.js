import React from 'react'
import RVG from '../Atlantide/SvgRender/RVG'
import * as Const from '../Const'
const s = Const.spacing, h = Const.logoHeight

const Component = 
    function Atom({x, y,mirrorHor, mirrorVer, ...props}) {
        const relPoints = `m${s*3 + (x || 0)} ${h - Const.magicRatio(s*2) + (y || 0)}l${s} ${h-Const.magicRatio(s*8)}h${s*2}l-${s*2} -${h-Const.magicRatio(s*6)}l${s} -${h-Const.magicRatio(s*8)}l${s*3} ${h-Const.magicRatio(s*4)}h${s*2}l-${s*5} -${h}l-${s*5} ${h}h${s*2}z` 
        return <path d={relPoints} {...props}/>
    }
//declare component css this is going to be printed only once in the page
Component.css = `path {
    transform-box: fill-box;
    transform-origin: center;
    transform: var(--t);
    stroke: var(--c, white);
    stroke-width: ${Const.stroke};
    fill: none;`

//config
Component.useShadow = true

const result = (props) => <RVG {...props}><Component style={{...(props.mirrorHor | props.mirrorVer) && {
    '--t': `scale(${props.mirrorHor ? -1 : 1},${props.mirrorVer ? -1 : 1})`
}}} /></RVG>
export default result