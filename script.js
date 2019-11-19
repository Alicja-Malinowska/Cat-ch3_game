let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");


const GAME_WIDTH = 350;
const GAME_HEIGHT = 470;


class Grid {
    constructor() {
        this.columns = 5;
        this.rows = 6;
        this.width = GAME_WIDTH - 4;
        this.height = GAME_HEIGHT - 70;
        this.intervalX = this.width / this.columns;
        this.intervalY = this.height / this.rows;
        this.padding = 2;
    }
    // draw a grid of equal width columns (5) and rows (6)
    draw(ctx) {
        for (let x = 0; x <= this.width; x += this.intervalX) {

            ctx.moveTo(x + this.padding + 0.5, this.padding);
            ctx.lineTo(x + this.padding + 0.5, this.height + this.padding);

        }

        for (let y = 0; y <= this.height + this.padding; y += this.intervalY) {

            ctx.moveTo(this.padding, y + this.padding + 0.5);
            ctx.lineTo(this.width + this.padding, y + this.padding + 0.5);

        }


        ctx.stroke();
    }

    getCellPos() {
        let cellPos = [];
        let posY = this.padding;
        for (let i = 0; i < grid.rows; i++) {
            let cellPosRow = [];
            let posX = this.padding;
            for (let j = 0; j < grid.columns; j++) {
                cellPosRow[j] = {
                    x: posX,
                    y: posY,
                    xEnd: posX + this.intervalX,
                    yEnd: posY + this.intervalY
                }
                posX += grid.intervalX;

            }
            posY += grid.intervalY;
            cellPos.push(cellPosRow);

        }
        return cellPos;
    }
    

    highlightCell(cellX, cellY, ctx) {
        ctx.strokeRect(cellX, cellY, this.intervalX - 4, this.intervalY - 4);
    }
}

let grid = new Grid;
grid.draw(ctx);


class Icons {
    constructor(grid) {
        this.icons = [...document.querySelectorAll(".icon")];
        this.size = 40;
        this.position = {
            x: (grid.intervalX + grid.padding) / 2 - this.size / 2,
            y: (grid.intervalY + grid.padding) / 2 - this.size / 2,
        };
    };

    //draw random icons into the grid
    draw(ctx) {

        let posY = this.position.y;
        for (let i = 0; i < grid.rows; i++) {
            let posX = this.position.x;
            for (let j = 0; j < grid.columns; j++) {
                ctx.drawImage(this.icons[Math.floor(Math.random() * 5)], posX, posY, this.size, this.size);
                posX += grid.intervalX;

            }
            posY += grid.intervalY;

        }

    }
}

let tiles = new Icons(grid);
tiles.draw(ctx);

function mousePos(canvas, event) {
    let canvasArea = canvas.getBoundingClientRect();
    let position = {
    x : event.clientX - canvasArea.left,
    y : event.clientY - canvasArea.top,
    }
    return position;
}

canvas.addEventListener ("mousedown", function(e) { 
    let mousePosition = mousePos(canvas, e);
    let cellPosArr = [].concat(...grid.getCellPos());
    for(let i = 0; i < cellPosArr.length; i++) {
        if(mousePosition.x > cellPosArr[i].x 
            && mousePosition.x < cellPosArr[i].xEnd 
            && mousePosition.y > cellPosArr[i].y
            && mousePosition.y < cellPosArr[i].yEnd) {
        grid.highlightCell(cellPosArr[i].x + grid.padding + 0.5, cellPosArr[i].y + grid.padding + 0.5, ctx);
    }
    }
}
    );

