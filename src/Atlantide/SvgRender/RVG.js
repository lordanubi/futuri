import React, {useEffect, useState} from 'react';
import Use from './Use'

function RVG(Component) {
    let component = function(...props) {
        
        //utility (is it the first instance of this component in the app?)
        Component.count = 0
        let [isFirstInstance, setIsFirstInstance] = useState(false)
        useEffect(() => { setIsFirstInstance(Component.count++ === 0); return () => {Component.count-- } }, [])

        //load css of the child (we might need that later)
        let Css = () => <style>{Component.css}</style>

        //load child with an identifier and props OR load use referincing to that id with props
        let component = <Component id={Component.name} {...!Component.useShadow && props[0]} />
        let shadowComponent = <Use id={Component.name} {...props[0]} />

        //if using shadow dom we hide the first component cause its used for reference
        let first = Component.useShadow ? <><defs><Css />{component}</defs>{shadowComponent}</> : <><Css />{component}</>
        let instance = Component.useShadow ? shadowComponent : component

        return isFirstInstance ? first : instance
    }
    component.width = Component.width
    component.height = Component.height
    Object.defineProperty(component, "name", { value: Component.name })

    return component
           
}
export default RVG