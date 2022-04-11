import React from 'react'

function SetBound({children}) {

    const svg = React.useCallback(node => {
        if (node !== null) {
            const box = node.getBBox()
            children.type.width = box.width
            children.type.height = box.height
        }
      }, []);
    
    return <g ref={svg}>{children}</g>
}
export default SetBound