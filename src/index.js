import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PixelGrid from './Patterns/PixelGrid/PixelGrid'
import Light from './Filters/Light';
import ColumnMaker from './Atlantide/ColumnMaker'
import * as Const from './Const'
import Atom from './Atom/Atom'

function App() {
  //app size based on window size data?
  const appHeight = 20
  const appWidth = 54
    return (<svg height="100%" width="100%">
              <rect width="100%" height="100%" />
              <svg preserveAspectRatio="xMinYMin meet" viewBox={`0 0 1 ${Const.realLogoHeight*appHeight}`} >
                <ColumnMaker flow="horizontal" y={0} x={0} quasiPeriodicHorizontalFlip evenOddVerticalFlip atoms={appWidth}>
                  <Atom style={{'--c': 'var(--gold)'}} />
                </ColumnMaker>
              </svg>
            </svg>)
    return (
    //for the sake of comodity, the svg of the interface is going to be (0 0 100 100)
      <>
      <Light name="backLight" />
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

let moveLight = event => {
  var x = event.clientX /window.innerWidth*100;
    var y = event.clientY/window.innerHeight*100;
    document.querySelectorAll("fePointLight").forEach(function(light) {
    light.setAttribute("y", y)
    light.setAttribute("x", x)
})}