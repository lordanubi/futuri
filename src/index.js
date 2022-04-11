
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PixelGrid from './Patterns/PixelGrid/PixelGrid'
import Light from './Filters/Light';
import Atom from './Atom/Atom'
import Scale from './Atlantide/SvgRender/SimpleTools/Scale';
import Background from './Site/Background';
import Transform from './Atlantide/SvgRender/SimpleTools/Transform';
import Interface from './Atlantide/SvgRender/Interface';
import Define from './Atlantide/SvgRender/Define';
function App() {
    return <svg height="100%" width="100%">
             <defs><Atom color="yellow" define /></defs>
            <Interface width={10000} height={10000} image>
              <PixelGrid spacing={250} height={1} width={8}><Atom /></PixelGrid>
              <Transform size={0.25} y={Atom.height}><PixelGrid spacing={1000} height={1} width={8}><Atom /></PixelGrid></Transform>
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