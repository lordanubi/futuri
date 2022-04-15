import React from 'react'
import Define from './Define'

function RVG(Component) {
    Component[Component.name] = 0 //counter of the component with this name
        const component = function(...props) {
            //counter stuff
            const useFirst = Component[Component.name]===1
            React.useEffect(() => { return () => { Component[Component.name]=0}}, []) //quando c'è un rerender si riazzera il conteggio        
            Component[Component.name]++
            let comp = <Component {...props[0]} />
                return useFirst ? <Define>{comp}</Define> : comp
        }
    Object.defineProperty(component, "name", { value: Component.name})
    return component
}
export default RVG