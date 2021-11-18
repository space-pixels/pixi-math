export function normalizeAngle(angle: number) {
  let result = angle
  while (result < 0) { result += Math.PI * 2 }
  while (result >= Math.PI * 2) { result -= Math.PI * 2 }
  return result
}
