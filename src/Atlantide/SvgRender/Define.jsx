import React, {useState} from 'react'

function Define({children}) {

    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const test = React.useCallback(node => {
      if (node !== null) {
          const box = node.getBBox()
          setHeight(box.height)
          setWidth(box.width)
      }
    }, [])
    
//non so perché ma vorrei togliere useShadow da qua e migliorre il css

    //load css of the component
    let Css = () => children.type.css ? <style>{children.type.css}</style> : ''
    //load component with ref id or component
    let component = children.type.useShadow ? <g id={children.type.name}>{children}</g> : children


    return <g ref={test}><Css />{component}</g>
}
export default Define