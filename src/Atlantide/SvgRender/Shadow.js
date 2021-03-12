import React, {useState, useEffect} from 'react';
import Cache from '../../cache.svg'
let count = 0
function Shadow({x, y, cached, style, children})  {
  const [firstInstance, setFirstInstance] = useState(false); useEffect(() => { setFirstInstance(count++ === 0); return () => { count-- } }, [])
    let props = {
      ...x && {x : x},
      ...y && {y : y},
      style: style
    }
    return firstInstance ? children : <use href={`${cached ? Cache : ''}#${children.type.name}`}  {...props} />
}
export default Shadow