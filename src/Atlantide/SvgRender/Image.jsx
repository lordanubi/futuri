import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
import ReactDOM from 'react-dom'
import svgToTinyDataUri from 'mini-svg-data-uri'

function Image({children})  {
  //interface automatico per ottenere il viewBox?
  //non ha molte differenze di performance sicuramente perché comunque il codice intero di tutti i loghi se lo deve scaricà, magari conviene se si stampa il componente su un file esterno (cosi può essere cachato)
  
    let image = <svg xmlns="http://www.w3.org/2000/svg">{children}</svg>
    const dataURI = svgToTinyDataUri(renderToStaticMarkup(image))
    //   const imageContainer = React.useCallback(node => {
    //     if (node !== null) {
    //       Image.timer = setTimeout(()=>{
    //         const image = svgToMiniDataURI(node.outerHTML)
    //         if (node.parentNode)
    //           node.outerHTML = `<image href="${image}" />`
    //       }, 0.1)
    //     }
    //   }, []) 
    // React.useEffect(() => {
    //   return () => {
    //     clearTimeout(Image.timer);
    //   }
    // }, [])

   return <image href={dataURI} />
}
export default Image