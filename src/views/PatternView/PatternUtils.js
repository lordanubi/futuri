import React from 'react';
const logoHeight = 688.2
const logoWidth = 1000
const spacing = 100
function VerticalReflect(props)  {
  return(
    <use y={-logoHeight} x={+250 + spacing} transform="scale(1, -1)" href={'#' +  props.source}
    />
  )
}
function HorizontalReflect(props)  {
    return(
      <use x={-1800 + spacing} transform="scale(-1, 1)" href={'#' + props.source} />
    )
  }
export {
VerticalReflect,
HorizontalReflect,
logoHeight,
logoWidth
}