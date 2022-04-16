import React from 'react'

function Define({children}) {
    let name = children.type.name
    let style = children.type.css && <style id={name+'Style'}>{children.type.css}</style>
    return <>{style}{children.type.useShadow && <g id={name}>{children}</g>}</>
}
export default Define