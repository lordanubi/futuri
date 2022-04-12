import React from 'react';
import Cache from '../../../cache.svg'
function Use({id, cached, x, y, mirrorHor, mirrorVer}) {

    let scale = (mirrorHor || mirrorVer)  ? `scale(${mirrorHor ? -1 : 1}, ${mirrorVer ? -1 : 1})` : ''
    let style = scale ? {'--t': scale} : undefined
    
    return <use href={`${cached ? Cache : ''}#${id}`} x={x} y={y} style={style} />
}
export default Use