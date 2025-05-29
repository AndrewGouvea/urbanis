export function drawTerrain(ctx, terrain, tileSize) {
    for(let y = 0; y < terrain.length; y++) {
        for(let x = 0; x < terrain[0].length; x++) {
            const value = terrain[y][x]
            const shade = (value + 1) * 127
            ctx.fillStyle = `rgb(${shade}, ${shade}, 200)`
            ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize)
        }
    }
}