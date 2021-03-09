import React from 'react';
import GridMaker from '../../Atlantide/GridMaker';
function PixelGrid(props)  {
    let patternSettings = {
        id: "PixelGrid",
        horizontal: {
          spacing: props.spacing, //props.spacing
          atoms: props.atoms, //props.atoms
          quasiPeriodicHorizontalFlip: true,
          evenOddVerticalFlip: true,
          phase: false
        },
        vertical: {
          spacing: props.spacing, //props.spacing
          atoms: props.atoms, //props.atoms
          quasiPeriodicHorizontalFlip: true,
          evenOddVerticalFlip: true,
          phase: false
        },
        withCouples: false,
        chaotic: false
      }
    return(<GridMaker set={patternSettings} {...props} />)
}
export default PixelGrid;
  