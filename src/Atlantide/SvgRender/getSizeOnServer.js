import { renderToStaticMarkup } from 'react-dom/server'

function getSizeOnServer(component) {
  let id = Math.floor(Math.random() * Date.now())
  document.body.insertAdjacentHTML('beforeEnd', `<svg style="visibility: hidden;" id="${id}">${renderToStaticMarkup(component)}</svg>`)
  return document.getElementById(id).getBBox()
  }
export default getSizeOnServer