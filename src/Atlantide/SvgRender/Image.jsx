import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
function Image({children})  {
  //console.log(children)
    let draw = <svg xmlns="http://www.w3.org/2000/svg">{children}</svg>
    
    let svgToMiniDataURI = require('mini-svg-data-uri')
    let image = svgToMiniDataURI(renderToStaticMarkup(draw))
   return (<image href={image} />)
}
export default Image