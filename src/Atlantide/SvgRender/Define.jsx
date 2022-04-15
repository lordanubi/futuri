import React from 'react'
import getSizeOnServer from './getSizeOnServer'

function Define({useShadow,children}) {
    let serverSize = getSizeOnServer(children)
    React[children.type.name] = {}
    React[children.type.name].width = serverSize.width
    React[children.type.name].height = serverSize.height
    
    //potremmo anche ritornare sempre un firstComponent con l'id (tanto servirà per altri controlli del framework)
    return <g id={useShadow ? children.type.name : undefined}>{children}</g>
}

export default Define