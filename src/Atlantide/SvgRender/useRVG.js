import React, {useEffect, useState} from 'react';
import Use from './Use'

function RVG(Component) {
    Component.count = 0
    let component = function(...props) {
        //load css of the child (we might need that later)
        let Css = () => <style>{Component.css}</style>

        //load child with an identifier and props OR load use referincing to that id with props
        let component = <Component id={Component.useShadow ? Component.name : undefined} {...!Component.useShadow && props[0]} />
        let shadowComponent = <Use id={Component.name} {...props[0]} />

        //if using shadow dom we hide the first component cause its used for reference
        let first = Component.useShadow ? <><defs><Css />{component}</defs>{shadowComponent}</> : <><Css />{component}</>
        let instance = Component.useShadow ? shadowComponent : component

        let isFirstInstance = Component.count===1
        Component.count++
        
        let result = isFirstInstance ? first : instance
        return result
    }
    console.log(<Component />)
    component.width = Component.width
    component.height = Component.height

    Object.defineProperty(component, "name", { value: Component.name })

    return component
           
}
export default RVG