let zoomLevel = 1;
let panX = 0;
let panY = 0;

export function setupCamera() {
    let zoomLevel = 1;
    let panX = 0;
    let panY = 0;
}

export function zoom(zoomFactor, mouseX, mouseY, canvas) {
    const worldX = (mouseX - canvas.width / 2) / zoomLevel + panX;
    const worldY = (mouseY - canvas.height / 2) / zoomLevel + panY;

    zoomLevel *= zoomFactor;

    panX = worldX - (mouseX - canvas.width / 2) / zoomLevel;
    panY = worldY - (mouseY - canvas.height / 2) / zoomLevel;
}

export function pan(dx, dy) {
    panX += dx;
    panY += dy;
}

export function applyCameraToContext(ctx, canvas) {
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(zoomLevel, zoomLevel) ;
    ctx.translate(-panX, -panY);

}

export function handleZoomPanEvents(canvas, redrawFn) {
    canvas.addEventListener('wheel', (event) => {
    event.preventDefault()
    const zoomFactor = event.deltaY > 0 ? 0.9 : 1.1;
    zoom(zoomFactor, event.offsetX, event.offsetY, canvas);
    redrawFn();
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
        const dx = (event.offsetX - lastX) / zoomLevel;
        const dy = (event.offsetY - lastY) / zoomLevel;
        pan(dx, dy);
        lastX = event.offsetX;
        lastY = event.offsetY;
        redrawFn();      
    }
})

canvas.addEventListener('mouseup', () => {
    isPanning = false
});
}





