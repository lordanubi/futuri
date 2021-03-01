import React from 'react';
import './PatternView.css';
import * as Const from '../../Const'
import PatternMaker from '../../Atlantide/Columns/PatternMaker'
import {motion} from 'framer-motion'
function PatternView(props)  {
  const gradientVariants = {start: {x1: '1%'}, end: {x1: '99%'}}
  const transition = {
    type: 'spring',
    duration: 2,
    bounce: 0.1,
    repeat: Infinity,
    repeatType: 'reverse'
  }
  let patternSettings = {
    horizontal: {
      spacing: 0,
      atoms: 20,
      quasiPeriodicHorizontalFlip: true,
      evenOddVerticalFlip: true,
      phase: false
    },
    vertical: {
      spacing: 0,
      atoms: 53,
      quasiPeriodicHorizontalFlip: true,
      evenOddVerticalFlip: true,
      phase: false
    },
    withCouples: false,
    chaotic: false
  }
  return(
    <svg viewBox={"0 0 " + Const.logoWidth + " " + Const.logoHeight} className="svgViewer">
      <defs>
              <motion.linearGradient initial="start" animate="end" transition={transition} variants={gradientVariants} id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"  stop-color="rgba(0, 0, 0, 0)"/>
                <stop offset="100%" class="glowColor" />
              </motion.linearGradient>
      </defs>
      <PatternMaker set={patternSettings} />
    </svg>
  )
}
export default PatternView;