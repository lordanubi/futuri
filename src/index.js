
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PixelGrid from './Patterns/PixelGrid/PixelGrid'
import Light from './Filters/Light';
import Atom from './Atom/Atom'
import Background from './Site/Background';
import Transform from './Atlantide/SvgRender/SimpleTools/Transform';
import Interface from './Atlantide/SvgRender/Interface';
import Define from './Atlantide/SvgRender/Define';
import PixelLine from './Patterns/PixelGrid/PixelLine';
import Rect from './Atom/Rect';
function App() {
  let lineSpacing = 350
  let smallLogoSpacing =250 || 550
  let bigLogoSpacing = 250
  let smallLogoSize = 0.403
    return <svg height="100%" width="100%">
            <Interface width="100%" height="100%">
              <Rect color="red" width={1800} height={300} x='50%' y='50%' />
            </Interface>
              <Interface image>

                <Transform size={smallLogoSize}>
                  <PixelLine spacing={smallLogoSpacing} width={38}>
                    <Atom />
                  </PixelLine>
                </Transform>
                <Transform y={Atom.height*smallLogoSize + lineSpacing}>
                  <PixelLine spacing={bigLogoSpacing} width={15}>
                    <Atom />
                  </PixelLine>
                </Transform>
                <Transform size={smallLogoSize} y={Atom.height*smallLogoSize + lineSpacing + Atom.height + lineSpacing}>
                  <PixelLine spacing={smallLogoSpacing} width={38}>
                    <Atom />
                    </PixelLine>
                </Transform>

              </Interface>
            </svg>
              
    return (
    //for the sake of comodity, the svg of the interface is going to be (0 0 100 100)
      <>
      <Light name="backLight" />
        <svg onMouseMove={moveLight} viewBox="0 0 100 100" width="100%" height="100%" className="svgViewer">
        <rect style={{filter: "url(#BaseRelief)"}} width={100} height={100} />
        </svg>


        <Scale size={2/5}>
                  <PixelGrid spacing={0} height={26} width={55}>
                        <Atom/>
                  </PixelGrid>
                </Scale>
                <Scale size={2/25}>
                  <PixelGrid spacing={0} height={130} width={280}>
                        <Atom/>
                  </PixelGrid>
                </Scale>
      </>
    )
}
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'))

let moveLight = event => {
  var x = event.clientX /window.innerWidth*100;
    var y = event.clientY/window.innerHeight*100;
    document.querySelectorAll("fePointLight").forEach(function(light) {
    light.setAttribute("y", y)
    light.setAttribute("x", x)
})}

if (module.hot) {
  module.hot.accept()
}