import React from 'react'
import Define from './Define'
import Use from './SimpleTools/Use'
import { renderToStaticMarkup } from 'react-dom/server'
import SVGPathCommander from 'svg-path-commander'
import Counter from '../../Counter'

function RVG(Component) {
    //Component[Component.name] = 0 //counter of the component with this name
    //if (!document.getElementById(Component.name+'Style')) {
    //    document.body.insertAdjacentHTML("afterbegin",renderToStaticMarkup(init))
    //}
        const component = function(...props) {
            //counter stuff
            //Component[Component.name]++
            //let isFirst = Component[Component.name]===1
            //React.useEffect(() => { return () => { Component[Component.name]=0}}, []) //quando c'è un rerender si riazzera il conteggio        


            // if (props[0].define || isFirst) 
            //     return <Define><Component {...props[0]} /></Define>
            if (props[0]?.ghost || Component.useShadow===true) 
                return <Use id={Component.name} {...props[0]} />
            
            return <Counter><Component {...props[0]} /></Counter>
        }
    Object.defineProperty(component, "name", { value: Component.name})
    //global width and height of this component 
    let size = getSize(<Component />)
    component.width = size?.width
    component.height = size?.height
    return component
    
}
function getSize(Component) {
    let parsedComp = renderToStaticMarkup(Component)
    return getBBox(parsedComp)
}
function getBBox(elementHTML) {
    let t = elementHTML?.split(' d="')[1]?.split('"')[0]
    if (!t) return
    return SVGPathCommander.getPathBBox(t)
}
export default RVG