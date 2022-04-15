import React from 'react'
import getSizeBeforeReact from './Functions/getSizeBeforeReact'

//potremmo anche ritornare sempre un firstComponent con l'id (tanto servirà per altri controlli del framework)
function Define({children}) {
    let style = children.type.css && <style>{children.type.css}</style>
    return <g id={children.type.useShadow ? children.type.name : undefined}>{style}{children}</g>
}
export default Define