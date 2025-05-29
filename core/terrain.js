import { Noise } from './noise.js'

const noise = new Noise(Math.random())

export function generateTerrain(width, height, scale) {
  const terrain = []

  for (let y = 0; y < height; y++) {
    const row = []
    for (let x = 0; x < width; x++) {
      const value = noise.perlin2(x * scale, y * scale)
      row.push(value)
    }
    terrain.push(row)
  }

  return terrain
}
