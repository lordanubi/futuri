import React from 'react';
import Css from './Css';
import Define from './Define';
import getSizeOnServer from './getSizeOnServer';
import Use from './SimpleTools/Use'

function RVG(Component) {
    Component[Component.name] = 0 //counter of the component with this name
        let component = function(...props) {

            let isFirstInstance = Component[Component.name]===1
            
            React.useEffect(() => { return () => { Component[Component.name]=0}}, []) //quando c'è un rerender si riazzera il conteggio?
            Component[Component.name]++

            //component settings
            let useShadow = Component.useShadow && props[0].shadow !== false

            //component versions
            let normalComponent = <Component {...props[0]} />
            let shadow = <Use id={Component.name} {...props[0]} />
            let firstOfType = <Define useShadow={useShadow}>{normalComponent}</Define>
            let style =  <Css component={Component} />

            //let's see if it's the first time priting the object in the page, if so let's define it first
            if (isFirstInstance || props[0].define)
                return <>{style}{firstOfType}</>

            if (useShadow)
                return shadow
                
                return normalComponent
        }
    Object.defineProperty(component, "name", { value: Component.name})
    
    component.width = Component.width
    component.height = Component.height
    return component
           
}
export default RVG