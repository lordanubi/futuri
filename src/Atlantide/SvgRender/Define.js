import React from 'react';

function Define(props) {
    //load css of the component
    let Css = () => props.children.type.css ? <style>{props.children.type.css}</style> : ''

    //load child with an identifier (if needed for shadow)
    let component = <props.children.type id={props.children.type.useShadow ? props.children.type.name : undefined} />

    return <><Css />{component}</>
}
export default Define