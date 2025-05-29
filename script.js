const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const width = 100
const height = 100
const tileSize = 10
const terrain = []

noise.seed(Math.random())

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save()

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(zoomLevel, zoomLevel) ;
    ctx.translate(-panX, -panY);

    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 100, 100);

    ctx.restore();
}

canvas.addEventListener('wheel', (event) => {
    event.preventDefault()
    const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1;
    zoom(zoomFactor, event.offsetX, event.offsetY);
    draw();
})

let isPanning = false;
let lastX, lastY;

canvas.addEventListener('mousedown', (event) => {
    if(event.button === 0) {
        isPanning = true;
        lastX = event.offsetX;
        lastY = event.offsetY;
    }
})

canvas.addEventListener('mousemove', (event) => {
      if(isPanning) {
        const dx = event.offsetX - lastX;
        const dy = event.offsetY - lastY;
        pan(dx, dy);
        draw();
        lastX = event.offsetX;
        lastY = event.offsetY;
    }
})

canvas.addEventListener('mouseup', () => {
    isPanning = false
});