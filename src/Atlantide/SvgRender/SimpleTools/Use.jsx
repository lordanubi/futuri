import React from 'react';
import Cache from '../../../cache.svg'
function Use({id, cached, x, y}) {
    return <use href={`${cached ? Cache : ''}#${id}`} x={x} y={y} />
}
export default Use