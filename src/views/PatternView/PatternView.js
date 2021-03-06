import React from 'react';
import './PatternView.css';
import * as Const from '../../Const'
import GridMaker from '../../Atlantide/GridMaker'
import PatternEditor from '../../Components/PatternEditor';

function PatternView(props)  {
  
  return(
    <>
    <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" width="100%" height="100%" className="svgViewer">
          <use href="#PixelGrid" />
    </svg>
    <svg className="interface" viewBox="0 0 100 100" width="100%" height="100%" >
      <circle cx="50" cy="50" r="50" />
    </svg>
    </>
  )
}
export default PatternView;