import React from 'react'
import PixelGrid from '../Patterns/PixelGrid/PixelGrid'
import Atom from '../Atom/Atom'
import Image from '../Atlantide/SvgRender/Image'
import Interface from '../Atlantide/SvgRender/Interface'

function Background() {
    return    <Interface fixed image> 
                        <PixelGrid spacing={100} height={30} width={30}>
                            <Atom/>
                        </PixelGrid>
                    </Interface>
}
export default Background