import React from 'react';
import PatternMaker from '../PatternMaker';
import * as Const from '../../constants'
import './AtomLineReflected.scss';
/* AtomLineReflected: AtomLine verticalmente riflessa */
function AtomLineReflected(props)  {
  return(
    <PatternMaker name="AtomLineReflected" patternWidth={8} >
            <use href="#AtomLine" x={Const.fullLogoWidth/2} className="mirrorVer" />
    </PatternMaker>
  )
}
export default AtomLineReflected;