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
      console.log(props.children.type.height)
      return <svg preserveAspectRatio="xMidYMid slice" viewBox={`0 0 ${props.children.type.width *props.width} ${props.children.type.height*props.height}`} >
        <GridMaker set={patternSettings} {...props} >{props.children}</GridMaker>
        </svg>
}
//problema da risolvere (come sappiamo quanti atomi ci saranno dentro? queste proprietà devono essere dinamiche)
PixelGrid.width = (Const.logoWidth/2 + Const.stroke/2) * 59 
PixelGrid.height = Const.realLogoHeight*20
export default RVG(PixelGrid)
  