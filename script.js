let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");


const GAME_WIDTH = 350;
const GAME_HEIGHT = 470;

function drawGrid() {
    const COLUMNS = 5;
    const ROWS = 6;
    const GRID_WIDTH = GAME_WIDTH - 4;
    const GRID_HEIGHT = GAME_HEIGHT - 70;
    const INTERVAL_X = GRID_WIDTH / COLUMNS;
    const INTERVAL_Y = GRID_HEIGHT / ROWS;
    const PADDING = 2;
    
    
    for (let x = 0; x <= GRID_WIDTH; x += INTERVAL_X) {
        
        ctx.moveTo(x + PADDING + 0.5, PADDING);
        ctx.lineTo(x + PADDING + 0.5, GRID_HEIGHT + PADDING);
        
    }

    for (let y = 0; y <= GRID_HEIGHT + PADDING; y += INTERVAL_Y) {
        
        ctx.moveTo(PADDING, y + PADDING + 0.5);
        ctx.lineTo(GRID_WIDTH + PADDING, y + PADDING + 0.5);
        
    }
    
    ctx.stroke();
}

drawGrid();

