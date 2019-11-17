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
    
    draw(ctx) {
        
        let posY = this.position.y;
        for(let i = 0; i < grid.rows; i++) {
            let posX = this.position.x;
            for(let j = 0; j < grid.columns; j++) {
                ctx.drawImage(this.icons[Math.floor(Math.random() * 5)], posX, posY, this.size, this.size);
                posX += grid.intervalX;
                
            }
            posY += grid.intervalY;
            
            
        }
        
    }
}

let tiles = new Icons(grid);
tiles.draw(ctx);
