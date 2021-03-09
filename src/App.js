import React from 'react';
import AtomDef from './Atom/Def'
import PixelGrid from './Patterns/PixelGrid/PixelGrid'
import HighRelief from './Filters/Relief/HighRelief';
import BaseRelief from './Filters/Relief/BaseRelief';
function App() {
  let moveLight = event => {
      var x = event.clientX /window.innerWidth*100;
      var y = event.clientY/window.innerHeight*100;
      document.querySelectorAll("fePointLight").forEach(function(light) {
        light.setAttribute("y", y)
        light.setAttribute("x", x)
      })
    }

    return (<><svg height="100%" width="100%"><PixelGrid /></svg>
            <svg height="0" width="0"><AtomDef/>
            </svg>
            </>)
    //in questa parte dell'App verranno caricati tutti i componenti svg che possono essere cachati
    return (
      <>
        <HighRelief/>
        <BaseRelief />
        <svg onMouseMove={moveLight} preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" width="100%" height="100%" className="svgViewer">
        <rect style={{filter: "url(#BaseRelief)"}} width={100} height={100} />
        </svg>
      </>
    )
}

export default App;
