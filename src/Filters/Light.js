import React from 'react';
import * as Const from '../Const'
function Light(props)  {
    return(
        <filter id={props.name} filterUnits="userSpaceOnUse">
                {/* <feDiffuseLighting lightingColor={Const.lightIntensity} diffuseConstant={1} in="SourceAlpha" >
                    <fePointLight x={50} y={50} z={Const.depth} />
                </feDiffuseLighting> */}
        </filter>
    )
}
export default Light;