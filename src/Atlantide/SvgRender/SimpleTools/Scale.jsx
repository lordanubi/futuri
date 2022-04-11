import React from 'react';
function Scale({size, children}) {
    return <g className='scale' transform={`scale(${size})`}>{children}</g>
}
export default Scale