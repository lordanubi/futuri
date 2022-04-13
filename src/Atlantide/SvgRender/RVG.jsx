import React from 'react';
import Define from './Define';
import Use from './SimpleTools/Use'

function RVG(Component) {
    //let's see if it's the first time priting the object in the page, if so let's define it first
    Component.count = 0 
        let component = function(...props) {
            let isFirstInstance = Component.count===1
            Component.count++
            if (isFirstInstance|| props[0].define)
                return <Define><Component {...props[0]} /></Define>
            else if (Component.useShadow && props[0].shadow !== false)
                return <Use id={Component.name} {...props[0]} />
            else 
                return <Component {...props[0]} />
        }
    Object.defineProperty(component, "name", { value: Component.name})
    
    component.width = Component.width
    component.height = Component.height
    return component
           
}
export default RVG