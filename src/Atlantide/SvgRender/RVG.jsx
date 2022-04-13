import React from 'react';
import Define from './Define';
import Use from './SimpleTools/Use'

function RVG(Component) {
    //let's see if it's the first time priting the object in the page, if so let's define it first
    Component[Component.name] = 0
        let component = function(...props) {

            React.useEffect(() => {
                return () => {
                    Component[Component.name]=0
                  }
              }, [])
            let isFirstInstance = Component[Component.name]===1
            Component[Component.name]++

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