import React from 'react';
import Cache from '../../cache.svg'
function Use({id, cached, ...props}) {
    return <use href={`${cached ? Cache : ''}#${id}`}  {...props} />
}
export default Use