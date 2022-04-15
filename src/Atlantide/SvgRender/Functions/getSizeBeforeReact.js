import { renderToStaticMarkup } from 'react-dom/server'

function getSizeBeforeReact(component) {
  const id = Math.floor(Math.random() * Date.now())
  document.body.insertAdjacentHTML('beforeEnd', `<svg style="visibility: hidden; height: 0; width:0" id="${id}">${renderToStaticMarkup(component)}</svg>`)
  const el = document.getElementById(id)
  const bBox = el.getBBox()
  el.remove()
  return bBox
}
export default getSizeBeforeReact