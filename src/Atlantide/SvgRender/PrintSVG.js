import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
function Image({x, y, style, children})  {
    let Svg = () => {
      return <svg style={style} xmlns="http://www.w3.org/2000/svg">
                {React.Children.map(children, (child) =>
                  React.cloneElement(child, { firstInstance: true })
                )}
              </svg>}
    
    var svgToMiniDataURI = require('mini-svg-data-uri')
    let image = svgToMiniDataURI(renderToStaticMarkup(<Svg />))
    let imageProps = {
      ...x && {x : x},
      ...y && {y : y}
    }
   return (<image {...imageProps} href={image} />)
}
export default Image