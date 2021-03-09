//brand costants
export function magicRatio(value) {
    // diviso 2 per ottenere metà base tirangolo * tan(54°)
    return Math.round(value/2*Math.tan(54*Math.PI/180))
}
//logo dimensions
export const logoWidth = 1000
export const logoHeight = magicRatio(logoWidth)
export const spacing = logoWidth/10