import Atom from './Atom/Atom'
import React from 'react'
import ReactDOMServer,{renderToStaticMarkup} from 'react-dom/server'
import { createRoot } from 'react-dom/client';

import './index.css'
import PixelLine from './Patterns/PixelLine/PixelLine';
function App() {
    return <svg height="100%" width="100%"><PixelLine atoms={2}/><PixelLine atoms={2}/></svg>
}

function define(Comp) {
  count++
  console.log(count,Comp)

  let componentName = Comp.type?.name
  let firstLetter = componentName ? componentName[0] : undefined
  let isListOfComp = Comp[0]
  let children = Comp.props?.children
  let isNotHTML = firstLetter?.toUpperCase() === firstLetter
  let isNotDefinedYet = definedComp.includes(componentName) === false
  
  //se è una lista di comp li cicliamo e li definiamo uno ad uno
  if (isListOfComp) {Comp.map(Comp => define(Comp)); return}

  //se il componente ha figlii dobbiamo definire anche loro
  if (children) define(children)

  //se non è già stato fatto segniamo che il componente è stato incontrato e non deve essere ridefinito.
  if (componentName && isNotDefinedYet) definedComp.push(componentName + count)


  //se non ha figli però è un componente allora eseguiamo la sua funzione per vedere che c'è dentro (solo se non è già stato definito)
  if (isNotHTML && isNotDefinedYet) {
    eval(`
    define(${componentName}(Comp.props))
    `)
    //define(Atom())
  } 

}





const container = document.getElementById('root').insertAdjacentHTML('afterbegin',renderToStaticMarkup(<App />))
// const root = createRoot(container) // createRoot(container!) if you use TypeScript
// root.render(<React.StrictMode><App /></React.StrictMode>)





let moveLight = event => {
  var x = event.clientX /window.innerWidth*100;
    var y = event.clientY/window.innerHeight*100;
    document.querySelectorAll("fePointLight").forEach(function(light) {
    light.setAttribute("y", y)
    light.setAttribute("x", x)
})}