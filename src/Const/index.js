export const phi = (1 + Math.sqrt(5)) / 2
export const depth = 10
export const lightIntensity = 'white'
export function quasiPeriodBehaviour(n) {
    return (2-(Math.floor((n+2)* phi)-Math.floor((n+1)*phi)))
  }
export function periodBehaviour(n) {
  return (n%2!==0)
}
export * from "./logoDimensions";