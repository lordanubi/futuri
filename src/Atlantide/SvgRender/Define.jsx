import React from 'react'
import getSizeOnServer from './Functions/getSizeOnServer'

//potremmo anche ritornare sempre un firstComponent con l'id (tanto servirà per altri controlli del framework)
function Define({children}) {
    let style = children.type.css && <style>{children.type.css}</style>
    let serverSize = getSizeOnServer(children)
    React[children.type.name] = {width: serverSize.width,height: serverSize.height}
    return <g id={children.type.useShadow ? children.type.name : undefined}>{style}{children}</g>
}
export default Define