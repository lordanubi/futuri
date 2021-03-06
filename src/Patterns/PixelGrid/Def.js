import React from 'react';
import GridMaker from '../../Atlantide/GridMaker';
function PixelGridDef(props)  {
    let patternSettings = {
        id: "PixelGrid",
        horizontal: {
          spacing: 2,
          atoms: 50,
          quasiPeriodicHorizontalFlip: true,
          evenOddVerticalFlip: true,
          phase: false
        },
        vertical: {
          spacing: 2,
          atoms: 50,
          quasiPeriodicHorizontalFlip: true,
          evenOddVerticalFlip: true,
          phase: false
        },
        withCouples: false,
        chaotic: false
      }
    return(<GridMaker set={patternSettings} />)
}
export default PixelGridDef;
  