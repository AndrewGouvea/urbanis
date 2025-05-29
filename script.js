import {
  setupCamera,
  applyCameraToContext,
  handleZoomPanEvents,
} from './core/camera.js'
import { generateTerrain } from './core/terrain.js'
import { drawTerrain } from './core/renderer.js'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const terrain = generateTerrain(100, 100, 0.1) // largura, altura, escala

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.save()
  applyCameraToContext(ctx, canvas)
  drawTerrain(ctx, terrain, 10)
  ctx.restore()
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  draw()
})

setupCamera()
handleZoomPanEvents(canvas, draw)
draw()
