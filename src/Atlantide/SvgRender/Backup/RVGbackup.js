import React, {useRef,useEffect} from 'react';
import Use from './Use'

function RVG(Component) {
    Component.count = 0
        let component = function(...props) {
            //load css of the component (we might need that later)
            let Css = () => Component.css ? <style>{Component.css}</style> : ''

            //load child with an identifier (if needed for shadow) and props OR load use referincing to that id with props
            let component = <Component id={Component.useShadow ? Component.name : undefined} {...!Component.useShadow && props[0]} />
            let shadowComponent = <Use id={Component.name} {...props[0]} />

            //if using shadow dom we put the first component in defs cause its used for reference only and then we print the shadow, else we print normal component with css as well since is the first time
            let firstInstance = Component.useShadow ? <><defs><Css />{component}</defs>{shadowComponent}</> : <><Css />{component}</>
            let instance = Component.useShadow ? shadowComponent : component

            let isFirstInstance = Component.count===1
            Component.count++
            return isFirstInstance ? firstInstance : instance
        }
    component.width = Component.width
    component.height = Component.height
    Object.defineProperty(component, "name", { value: Component.name })

    return component
           
}
export default RVG