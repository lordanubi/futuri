import React from 'react'
import Define from './Define'
import { renderToStaticMarkup } from 'react-dom/server'

function RVG(Component) {
    let init = <Define Of={Component}></Define>
    Component[Component.name] = 0 //counter of the component with this name
    if (!document.getElementById(Component.name+'Style')) {
        document.body.insertAdjacentHTML("afterbegin",renderToStaticMarkup(init))
    }
        const component = function(...props) {
            //counter stuff
            const useFirst = Component[Component.name]===1
            React.useEffect(() => { return () => { Component[Component.name]=0}}, []) //quando c'è un rerender si riazzera il conteggio        
            Component[Component.name]++
            let comp = <Component {...props[0]} />
            let shadow = <Use id={Component.name} {...props[0]} />
            return <>{useFirst && init} {Component.useShadow===true ? shadow : comp}</>
        }
    Object.defineProperty(component, "name", { value: Component.name})
    return component
}
export default RVG