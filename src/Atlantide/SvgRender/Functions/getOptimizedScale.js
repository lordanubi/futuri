function getOptimizedScale(scaleX,scaleY) {
  let scaleXString = scaleX.toString()
  let scaleYString = scaleY.toString()
  if (scaleXString.charAt(0) === '0') scaleX = scaleXString.substring(1)
  if (scaleYString.charAt(0) === '0') scaleY = scaleYString.substring(1)
  let scale = (scaleX === scaleY) ? scaleX : `${scaleX}, ${scaleY}`
  return scale
}
export default getOptimizedScale