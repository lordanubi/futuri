import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AtomDef from './Atom/Def'
import PixelGrid from './Patterns/PixelGrid/PixelGrid'
import Light from './Filters/Light';
function App() {
  let moveLight = event => {
      var x = event.clientX /window.innerWidth*100;
      var y = event.clientY/window.innerHeight*100;
      document.querySelectorAll("fePointLight").forEach(function(light) {
        light.setAttribute("y", y)
        light.setAttribute("x", x)
      })
    }
    //for the sake of comodity, the svg of the interface is going to be (0 0 100 100)
    return (<>
              <svg height="100%" width="100%">
                <AtomDef />
                <Light name="backLight" />
                <PixelGrid atoms={40} spacing={0} />
                <svg viewBox="0 0 100 100"><rect width="100%" height="100%" /></svg>
              </svg>
            </>)
    return (
      <>
        <svg onMouseMove={moveLight} viewBox="0 0 100 100" width="100%" height="100%" className="svgViewer">
        <rect style={{filter: "url(#BaseRelief)"}} width={100} height={100} />
        </svg>
      </>
    )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
