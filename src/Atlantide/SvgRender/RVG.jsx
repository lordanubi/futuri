import React from 'react'
import Define from './Define'
import Use from './SimpleTools/Use'

function RVG(Component) {
    Component[Component.name] = 0 //counter of the component with this name
        const component = function(...props) {
            //counter stuff
            const useFirst = Component[Component.name]===1
            React.useEffect(() => { return () => { Component[Component.name]=0}}, []) //quando c'è un rerender si riazzera il conteggio        
            Component[Component.name]++
            
            return useFirst ? <Define><Component {...props[0]} /></Define>: Component.useShadow ? <Use id={Component.name} {...props[0]} /> : <Component {...props[0]} />
        }
    Object.defineProperty(component, "name", { value: Component.name})
    return component         
}
export default RVG