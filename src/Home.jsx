
import Light from './Filters/Light'
import Atom from './Atom/Atom'
import Interface from './Atlantide/SvgRender/Interface'
import Rect from './Atom/Rect'
import PixelLine from './Patterns/PixelLine/PixelLine'

function Home() {
    return <>
                  <Interface width="100%" height="100%">
                    <Rect color="white" width={1800} height={300} x='50%' y='50%' />
                  </Interface>
                    <Interface image>
                      <PixelLine atoms={30} />
                      </Interface>
            </>
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

export default Home
let moveLight = event => {
  var x = event.clientX /window.innerWidth*100;
    var y = event.clientY/window.innerHeight*100;
    document.querySelectorAll("fePointLight").forEach(function(light) {
    light.setAttribute("y", y)
    light.setAttribute("x", x)
})}