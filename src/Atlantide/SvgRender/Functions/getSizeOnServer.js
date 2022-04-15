import { renderToStaticMarkup } from 'react-dom/server'

function getSizeOnServer(component) {
  const id = Math.floor(Math.random() * Date.now())
  document.body.insertAdjacentHTML('beforeEnd', `<svg style="visibility: hidden;" id="${id}">${renderToStaticMarkup(component)}</svg>`)
  const el = document.getElementById(id)
  const bBox = el.getBBox()
  el.remove()
  return bBox
  }
export default getSizeOnServer