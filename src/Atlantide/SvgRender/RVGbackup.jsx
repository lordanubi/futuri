import React from 'react';
import Define from './Define';
import Use from './SimpleTools/Use'
import { renderToStaticMarkup } from 'react-dom/server'

function RVG(Component) {
    //let's see if it's the first time priting the object in the page, if so let's define it first
    Component[Component.name] = 0

        let component = function(...props) {
            const elementRef = React.useRef(null)
            React.useLayoutEffect(() => {
                Component[Component.name]++
                if (Component[Component.name]===1 || props[0].define)
                elementRef.current.insertAdjacentHTML("beforebegin", renderToStaticMarkup(define))
                return () => {
                    Component[Component.name]=0
                  }
              }, [])
            let define = <Define><Component {...props[0]} /></Define>
            let use = <Use id={Component.name} {...props[0]} />
            let normal = <Component {...props[0]} />
            
            return <g ref={elementRef}>{(Component.useShadow && props[0].shadow !== false) ? use : normal}</g>
        }








    Object.defineProperty(component, "name", { value: Component.name})
    
    component.width = Component.width
    component.height = Component.height
    return component
           
}
export default RVG