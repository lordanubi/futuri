import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
import ReactDOM from 'react-dom'

function Image({children})  {
  //interface automatico per ottenere il viewBox?
  //non ha molte differenze di performance sicuramente perché comunque il codice intero di tutti i loghi se lo deve scaricà, magari conviene se si stampa il componente su un file esterno (cosi può essere cachato)
  
    let svgToMiniDataURI = require('mini-svg-data-uri')

      const imageContainer = React.useCallback(node => {
        if (node !== null) {
          Image.timer = setTimeout(()=>{
            const image = svgToMiniDataURI(node.outerHTML)
            if (node.parentNode)
              node.outerHTML = `<image href="${image}" />`
          }, 0.1)
        }
      }, []) 
    React.useEffect(() => {
      return () => {
        clearTimeout(Image.timer);
      }
    }, [])

   return <svg xmlns="http://www.w3.org/2000/svg" ref={imageContainer}>{children}</svg>
}
export default Image