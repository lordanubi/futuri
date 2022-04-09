import React from 'react';
import Use from './Use'
import SetBound from './SetBound'

function Define(props) {
    //load css of the component
    let Css = () => props.children.type.css ? <style>{props.children.type.css}</style> : ''

    //load child with an identifier (if needed for shadow)
    let component = <props.children.type id={props.children.type.useShadow ? props.children.type.name : undefined} {...!props.children.type.useShadow && props[0]} />

    //if using shadow dom we put the first component in defs cause its used for reference only and then we print the shadow, else we print normal component with css as well since is the first time
    let firstInstance = props.children.type.useShadow ? <><defs><Css />{component}</defs></> : <Css />

    return firstInstance


}
export default Define