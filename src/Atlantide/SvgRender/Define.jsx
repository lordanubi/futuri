import React from 'react'
function Define({Of}) {
    let Component = Of.name
    let style = Of.css && <style id={Component+'Style'}>{Of.css}</style>
    return <defs>{style}{Of.useShadow && <g id={Component}>{<Of />}</g>}</defs>
}
export default Define