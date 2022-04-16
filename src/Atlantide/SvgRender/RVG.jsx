import React from 'react'
import Define from './Define'
import Use from './SimpleTools/Use'
import { renderToStaticMarkup } from 'react-dom/server'
import SVGPathCommander from 'svg-path-commander'

function RVG(Component) {
    //Component[Component.name] = 0 //counter of the component with this name
    //if (!document.getElementById(Component.name+'Style')) {
    //    document.body.insertAdjacentHTML("afterbegin",renderToStaticMarkup(init))
    //}
        const component = function(...props) {
            let init = <Define><Component {...props[0]} /></Define>
            //counter stuff
            //const useFirst = Component[Component.name]===1
            //React.useEffect(() => { return () => { Component[Component.name]=0}}, []) //quando c'è un rerender si riazzera il conteggio        
            //Component[Component.name]++
            if (props[0].define) return init
            return Component.useShadow===true ? <Use getHeight={0} getWidth={0} id={Component.name} {...props[0]} /> : <Component {...props[0]} />
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
    let t = elementHTML?.split('d="')[1]?.split('"')[0]
    if (!t) return
    return SVGPathCommander.getPathBBox(t)
}
export default RVG