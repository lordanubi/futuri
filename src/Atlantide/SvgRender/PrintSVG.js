import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
function Image({x, y, style, children})  {
  //console.log(children)
    let draw = <svg style={style} xmlns="http://www.w3.org/2000/svg">{children}</svg>
    
    var svgToMiniDataURI = require('mini-svg-data-uri')
    let image = svgToMiniDataURI(renderToStaticMarkup(draw))
    let imageProps = {
      ...x && {x : x},
      ...y && {y : y}
    }
   return (<image {...imageProps} href={image} />)
}
export default Image