import React from 'react';
import GridMaker from '../../Atlantide/GridMaker';
import RVG from '../../Atlantide/SvgRender/RVG';
import * as Const from '../../Const'
function PixelGrid(props)  {
    let patternSettings = {
        id: "PixelGrid",
        horizontal: {
          spacing: props.spacing || 0, //props.spacing
          atoms: props.width || 1, //props.atoms
          quasiPeriodicHorizontalFlip: true,
          evenOddVerticalFlip: true,
          phase: false
        },
        vertical: {
          spacing: props.spacing || 0, //props.spacing
          atoms: props.height || 1, //props.atoms
          quasiPeriodicHorizontalFlip: true,
          evenOddVerticalFlip: true,
          phase: false
        },
        withCouples: false,
        chaotic: false
      }
      return <GridMaker set={patternSettings} {...props} >{props.children}</GridMaker>
}
PixelGrid.width = (Const.logoWidth/2 + Const.stroke/2) * 59 
PixelGrid.height = Const.realLogoHeight*20
export default RVG(PixelGrid)
  