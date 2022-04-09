import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PixelGrid from './Patterns/PixelGrid/PixelGrid'
import Light from './Filters/Light';
import * as Const from './Const'
import Atom from './Atom/Atom'
import Interface from './Atlantide/SvgRender/Interface';
import Scale from './Atlantide/SvgRender/Scale';
function App() {
  //specificare numero di loghi generati
  let horizontalAtoms = 2
  let verticalAtoms = 1 //questo può essere calcolato in automatico in base alla necessità

  //specificare grandezza loghi
  let logoMultiplier = 2

  //risoluzione dell'applicazione di solito uguale alla risoluzione del browser oppure fissa per fare grafiche
  const { height, width } = useWindowDimensions(); //ottiene risoluzione finestra
  
  const graphicWidth = 1607.6*20 //width browser o multiplo di larghezza atom
  const graphicHeight = 1106*20 //height browser o multiplo di larghezza atom

  //dimensione del logo, se non specificata viene calcolata in base alla risoluzione e a quanti loghi verranno generati 
  const logoWidthPixel = graphicWidth/((horizontalAtoms !== 1) ? horizontalAtoms/2 : horizontalAtoms)
  const logoHeightPixel = Const.magicRatio(logoWidthPixel)

  //calcola automaticamente quanto dev'essere ingrandito il logo
  //logoMultiplier = logoWidthPixel/1106

  //calcola atomi verticali in automatico per riempire la grafica
   //verticalAtoms = Math.round(graphicHeight/logoHeightPixel) + 1 //più uno per sicurezza in modo da riempire bene la grafica sarebbe bene generarne almeno il doppio per quando si modifica l'altezza della pagina)

  //<rect width="100%" height="100%" />
  //<svg height="100%" width="100%">
    return <Interface width={graphicWidth} height={graphicHeight} image> 
                  <PixelGrid spacing={100} height={6} width={18}>
                      <Atom/>
                  </PixelGrid>
              </Interface>
              
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
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
export default function useWindowDimensions() {
  //bug con RVG quando si usa USE 
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      clearTimeout(window.resizedFinished);
      window.resizedFinished = setTimeout(function(){
        setWindowDimensions(getWindowDimensions());
      }, 250);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

let moveLight = event => {
  var x = event.clientX /window.innerWidth*100;
    var y = event.clientY/window.innerHeight*100;
    document.querySelectorAll("fePointLight").forEach(function(light) {
    light.setAttribute("y", y)
    light.setAttribute("x", x)
})}
  /*
<text x={0} y={0} height={Atom.height*appHeight} width={Atom.width*appWidth}>
                  <tspan>Fu tanto raro e universale, che dalla natura per suo miracolo esser produtto dire si puote:</tspan>
                  <tspan>la quale non solo della bellezza del corpo, che molto bene gli concedette, volse dotarlo,</tspan>
                  <tspan>ma di molte rare virtù volse anchora farlo maestro.</tspan>
                </text>
  */