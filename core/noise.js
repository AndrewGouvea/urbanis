// core/noise.js

export class Noise {
  constructor(seed) {
    this.perm = new Uint8Array(512)
    this.p = new Uint8Array(256)
    this.seed(seed || Math.random())
  }

  seed(seed) {
    if (typeof seed === 'number') {
      seed = Math.floor(seed * 65536)
    }

    for (let i = 0; i < 256; i++) {
      this.p[i] = i
    }

    for (let i = 255; i > 0; i--) {
      const n = Math.floor((seed + 31 * i) % (i + 1))
      const tmp = this.p[i]
      this.p[i] = this.p[n]
      this.p[n] = tmp
    }

    for (let i = 0; i < 512; i++) {
      this.perm[i] = this.p[i & 255]
    }
  }

  fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10)
  }

  lerp(t, a, b) {
    return a + t * (b - a)
  }

  grad(hash, x, y) {
    const h = hash & 15
    const u = h < 8 ? x : y
    const v = h < 4 ? y : h === 12 || h === 14 ? x : 0
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
  }

  perlin2(x, y) {
    const X = Math.floor(x) & 255
    const Y = Math.floor(y) & 255

    x -= Math.floor(x)
    y -= Math.floor(y)

    const u = this.fade(x)
    const v = this.fade(y)

    const aa = this.perm[X + this.perm[Y]]
    const ab = this.perm[X + this.perm[Y + 1]]
    const ba = this.perm[X + 1 + this.perm[Y]]
    const bb = this.perm[X + 1 + this.perm[Y + 1]]

    return this.lerp(
      v,
      this.lerp(u, this.grad(aa, x, y), this.grad(ba, x - 1, y)),
      this.lerp(u, this.grad(ab, x, y - 1), this.grad(bb, x - 1, y - 1)),
    )
  }
}
