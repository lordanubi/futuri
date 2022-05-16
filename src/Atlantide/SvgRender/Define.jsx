import React from 'react'

function Define({children}) {
    let name = children.type.name
    let style = children.type.css && <style id={name+'Style'}>{children.type.css}</style>
    return <g id={name}>{style}{children}</g>
}
export default Define