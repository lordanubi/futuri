import React, {useState} from 'react'
//sicuramente in sta merda si può togliere il g che è inutile

function Define({children}) {
    
//non so perché ma vorrei togliere useShadow da qua e migliorre il css

    //load css of the component
    let css = children.type.css ? <style>{children.type.css}</style> : ''

    return <>{css}{children.type.useShadow ? <g id={children.type.name}>{children}</g> : children}</>
}
export default Define