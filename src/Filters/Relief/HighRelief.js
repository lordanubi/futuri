import React from 'react';
import * as Const from '../../Const'
function HighRelief()  {
    return(
        <filter id="HighRelief" >
                <feGaussianBlur in="SourceAlpha" stdDeviation="0.08" result="blur" />
                <feDiffuseLighting in="blur" surfaceScale="1.5"><fePointLight x={50} y={50} z={Const.depth} /></feDiffuseLighting>
                <feComposite in="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0"/>
        </filter>
    )
}
export default HighRelief;