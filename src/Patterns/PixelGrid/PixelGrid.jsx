import React from 'react';
import GridMaker from '../../Atlantide/GridMaker';

function PixelGrid({spacing, width, height, children})  {
    let patternSettings = {
        id: "PixelGrid",
        horizontal: {
          spacing: spacing || 0,
          atoms: width || 1,
          quasiPeriodicHorizontalFlip: true,
          evenOddVerticalFlip: true,
          phase: false
        },
        vertical: {
          spacing: spacing || 0,
          atoms: height || 1,
          quasiPeriodicHorizontalFlip: true,
          evenOddVerticalFlip: true,
          phase: false
        },
        withCouples: false,
        chaotic: false
      }
      return <GridMaker set={patternSettings} >{children}</GridMaker>
}
export default PixelGrid