import React, {useRef, useEffect} from 'react';
function SetBound(props) {
    useEffect(() => {
        const box = childRef.current.getBBox()
        props.children.props.children[1].type.width = box.width
        props.children.props.children[1].type.height = box.height
    }, []);
    const childRef = useRef()
    
    return <g ref={childRef}>{props.children}</g>
}
export default SetBound