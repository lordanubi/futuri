import React from 'react';
import GridMaker from '../../Atlantide/GridMaker';

function PixelLine({spacing, width, children})  {
    let patternSettings = {
        id: "PixelLine",
        horizontal: {
          spacing: spacing || 0,
          atoms: width || 1,
          quasiPeriodicHorizontalFlip: true,
          evenOddVerticalFlip: true,
          phase: false
        },
        vertical: {
          spacing: spacing || 0,
          atoms: 1,
          quasiPeriodicHorizontalFlip: true,
          evenOddVerticalFlip: true,
          phase: false
        },
        withCouples: false,
        chaotic: false
      }
      return <GridMaker set={patternSettings} >{children}</GridMaker>
}
export default PixelLine