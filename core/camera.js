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
