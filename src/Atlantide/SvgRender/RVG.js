import React, {useEffect, useState} from 'react';
import GetStyle from '../Utils/GetComponentCSS';
import Use from './Use'

function RVG({children, x, y, firstInstance}) {
    //utility (is it the first instance of this component in the app?)
    children.type.count = 0
    const [firstTime, setFirstTime] = useState(false)
    useEffect(() => { setFirstTime(children.type.count++ === 0); return () => { children.type.count-- } }, [])
    let isFirstInstance = (firstTime || firstInstance)

    //take id referencing for <use> from child function name
    const componentId = children.type.name

    //load css of the child (we might need that later)
    const css = <GetStyle of ={children} />

    //load inline style of the child (might be used later for <use> shadowComponent)
    const inlineStyle = children.props.style

    const postionAndStyle = {x : x, y: y, style: inlineStyle}
    //either Child or Use are going to get positionAndStyling depending on shadow behaviour of the component

    //child ref but we can update props
    const Child = (updatedProps) =>  React.cloneElement(children, updatedProps)
    
    //load child with an identifier and styles OR load use referincing to that id with styles
    const component = <Child id={componentId} {...!children.type.useShadow && postionAndStyle} />
    const shadowComponent = <Use id={componentId} {...children.type.useShadow && postionAndStyle} />

    //if using shadow dom we hide the first component used for reference
    let first = children.type.useShadow ? <><defs>{css}{component}</defs>{shadowComponent}</> : <>{css}{component}</>
    let instance = children.type.useShadow ? shadowComponent : component
    return isFirstInstance ? first : instance
           
}
export default RVG