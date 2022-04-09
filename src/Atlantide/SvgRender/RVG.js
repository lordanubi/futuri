import React, {useRef,useEffect} from 'react';
import Define from './Define';
import Use from './Use'

function RVG(Component) {
    Component.count = 0
        let component = function(...props) {
            let isFirstInstance = Component.count===1
            Component.count++
            if (isFirstInstance)
                return <Define><Component {...props[0]} /></Define>
            else if (Component.useShadow)
                return <Use className={Component.count} id={Component.name} {...props[0]} />
            else 
                return <Component />
        }
    Object.defineProperty(component, "name", { value: Component.name })
    component.width = Component.width
    component.height = Component.height
    return component
           
}
export default RVG