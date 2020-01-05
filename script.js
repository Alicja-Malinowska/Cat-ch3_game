window.onload = function () {
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
            this.higlightPadding = this.padding + 2.5;
        }
        // draw a grid of equal width columns (5) and rows (6)
        draw(ctx) {
            for (let x = 0; x <= this.width; x += this.intervalX) {
                ctx.beginPath();
                ctx.moveTo(x + this.padding + 0.5, this.padding);
                ctx.lineTo(x + this.padding + 0.5, this.height + this.padding);
                ctx.stroke();

            }

            for (let y = 0; y <= this.height + this.padding; y += this.intervalY) {
                ctx.beginPath();
                ctx.moveTo(this.padding, y + this.padding + 0.5);
                ctx.lineTo(this.width + this.padding, y + this.padding + 0.5);
                ctx.stroke();

            }



        }
        // creates a two-dimensional array of objects, each containing position where a cell starts and where it ends
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
            ctx.strokeStyle = "#000000";
            ctx.strokeRect(cellX + this.higlightPadding, cellY + this.higlightPadding, this.intervalX - 8, this.intervalY - 8);
        }

        removeHighlight(cellX, cellY, ctx) {
            ctx.clearRect(cellX - 1 + this.higlightPadding, cellY - 1 + this.higlightPadding, this.intervalX - 6, 8);
            ctx.clearRect(cellX - 1 + this.higlightPadding, cellY - 1 + this.higlightPadding, 8, this.intervalY - 6);
            ctx.clearRect(cellX - 1 + this.higlightPadding, cellY + this.higlightPadding + this.intervalY - 14, this.intervalX - 6, 8);
            ctx.clearRect(cellX - 1 + this.higlightPadding + this.intervalX - 14, cellY - 1 + this.higlightPadding, 8, this.intervalY - 6);

        }

    }

    let grid = new Grid();
    grid.draw(ctx);


    class Icons {
        constructor(grid) {
            this.icons = [...document.querySelectorAll(".icon")];
            //this.selectedIcons = [];
            this.size = 40;
            this.position = {
                x: (grid.intervalX + grid.padding) / 2 - this.size / 2,
                y: (grid.intervalY + grid.padding) / 2 - this.size / 2,
            };

        };

        //draw icon
        draw(ctx, currentIcon, posX, posY) {
            ctx.drawImage(currentIcon, posX, posY, this.size, this.size);
        }

        move(moveArray, drawArray) {
            
            let movement = setInterval(function() {
            
                ctx.clearRect(0, 0, grid.width, grid.height);

                grid.draw(ctx);

                drawArray.forEach(icon => ctx.drawImage(icon.image, icon.x, icon.y, tiles.size, tiles.size));
                   
                moveArray.forEach(function(obj) {
                    let speed = 2;
                
                //iconsArray.filter(icon => !(emptyArray.includes(icon))).forEach(icon => ctx.drawImage(icon.image, icon.x, icon.y, tiles.size, tiles.size));
                    obj.y += speed;
                    if(obj.y >= obj.destinationY) {
                        obj.y = obj.destinationY;   
                    }
                    ctx.drawImage(obj.image, obj.x, obj.y, tiles.size, tiles.size);
                
                
                //obj.y = Math.min(obj.y + speed, obj.destinationY);

            });
                drawArray.push(moveArray.map(obj => obj.y >= obj.destinationY));
                moveArray = moveArray.filter(obj => obj.y < obj.destinationY);
           
               

                if (moveArray.length === 0) {
                    clearInterval(movement);
                }
                
        }, 30)


        
        }

        swap(firstPosX, firstPosY, secondPosX, secondPosY) {
            [firstPosX, secondPosX] = [secondPosX, firstPosX];
            [firstPosY, secondPosY] = [secondPosY, firstPosY];
            return [firstPosX, firstPosY, secondPosX, secondPosY];
        }

        update(firstPosX, firstPosY, secondPosX, secondPosY, icon1, icon2) {
            ctx.clearRect(firstPosX, firstPosY, this.size, this.size);
            ctx.clearRect(secondPosX, secondPosY, this.size, this.size);
            ctx.drawImage(icon1, firstPosX, firstPosY, this.size, this.size);
            ctx.drawImage(icon2, secondPosX, secondPosY, this.size, this.size);
        }
    }

    let tiles = new Icons(grid);
    console.log(tiles.swap(1, 2, 3, 4));


    // get a mouse position
    function mousePos(canvas, event) {
        let canvasArea = canvas.getBoundingClientRect();
        let position = {
            x: event.clientX - canvasArea.left,
            y: event.clientY - canvasArea.top,
        }
        return position;
    }

    class Game {
        constructor(grid, tiles) {
            this.tPosition = tiles.position;
            this.selectedIcons = [];
            this.selectedIconsArr = [];
            this.icons = tiles.icons;
            this.clicked = [];
            this.clickedIcon = [];
            this.cellPosArr = [].concat(...grid.getCellPos());
            this.matches = [];
            this.validSwap = false;
            this.validClick = false;


        }
        /**
         * draws random icons into the canvas
         * @param {Object} ctx 
         */
        drawLevel(ctx) {
            let posY = this.tPosition.y;
            for (let i = 0; i < grid.rows; i++) {
                let posX = this.tPosition.x;
                let selectedIconsRow = [];
                for (let j = 0; j < grid.columns; j++) {
                    let currentIcon = this.icons[Math.floor(Math.random() * 5)];
                    tiles.draw(ctx, currentIcon, posX, posY);
                    selectedIconsRow[j] = {
                        image: currentIcon,
                        x: posX,
                        y: posY
                    };
                    posX += grid.intervalX;

                }
                posY += grid.intervalY;
                this.selectedIcons.push(selectedIconsRow);
            }
            this.selectedIconsArr = [].concat(...this.selectedIcons);
        }


        findMatches() {
            //finds matches in rows
            let matchesRows = [];
            let matchesCols = [];
            for (let i = 0; i < this.selectedIcons.length; i++) {
                let current = {};
                let rowMatch = [];
                for (let j = 0; j < this.selectedIcons[i].length; j++) {
                    if (current.image === this.selectedIcons[i][j].image) {
                        if (rowMatch.length === 0) {
                            rowMatch.push(current);
                        };

                        rowMatch.push(this.selectedIcons[i][j]);
                    } else {

                        if (rowMatch.length >= 3) {
                            matchesRows.push(rowMatch);
                            rowMatch = [];
                        } else {
                            rowMatch = [];
                        }
                        current = this.selectedIcons[i][j];


                    }
                }
                if (rowMatch.length >= 3) {
                    matchesRows.push(rowMatch);
                }
            }


            //find matches in columns
            for (let i = 0; i < this.selectedIcons[0].length; i++) {
                let current = {};
                let colMatch = [];
                for (let j = 0; j < this.selectedIcons.length; j++) {
                    if (current.image === this.selectedIcons[j][i].image) {
                        if (colMatch.length === 0) {
                            colMatch.push(current);
                        };

                        colMatch.push(this.selectedIcons[j][i]);
                    } else {
                        if (colMatch.length >= 3) {
                            matchesCols.push(colMatch);
                            colMatch = [];
                        } else {
                            colMatch = [];
                        }
                        current = this.selectedIcons[j][i];


                    }
                }
                if (colMatch.length >= 3) {
                    matchesCols.push(colMatch);
                }
            }

            //all matches with duplicates removed
            this.matches = Array.from(new Set([].concat(...matchesCols.concat(matchesRows))));
            //array sorted so that the bottom tiles are first (starting from the biggest y)
            this.matches.sort((a, b) => b.y - a.y);
            return this.matches;
        }

        removeMatches(ctx) {
            this.matches.forEach(element => {
                ctx.clearRect(element.x, element.y, tiles.size, tiles.size)
            });

            /*this.matches.forEach(function (el) {
                let index = game.selectedIconsArr.findIndex(obj => obj.x === el.x && obj.y === el.y);
                el[index] = {};
            });*/

            
        }
        fillEmptyCells() {
            let emptyCells = [...this.matches];

            // while(emptyCells.length > 0) {
            for (let i = 0; i < emptyCells.length; i++) {
                if (emptyCells[i].y <= this.tPosition.y) {
                    console.log(i + "nothing above");
                    let randomIcon = this.icons[Math.floor(Math.random() * 5)]
                    tiles.draw(ctx, randomIcon, emptyCells[i].x, emptyCells[i].y);
                    this.updateLevel(emptyCells[i], randomIcon);
                    emptyCells.splice(i, 1);
                    i--;
                    console.log(emptyCells);
                } else if (emptyCells.find(obj => obj.y !== emptyCells[i].y && Math.floor(obj.y) >= Math.floor(emptyCells[i].y - grid.intervalY) && Math.floor(obj.y) < Math.floor(emptyCells[i].y + grid.intervalY) && obj.x === emptyCells[i].x)) {
                    console.log(i + "empty above");
                } else {
                    console.log(i);
                    let toMove = this.selectedIconsArr.find(obj => obj.x === emptyCells[i].x && obj.y < emptyCells[i].y && obj.y >= Math.floor(emptyCells[i].y - grid.intervalY));
                    //this.updateLevel(emptyCells[i], toMove.image);
                    //console.log(this.selectedIconsArr);
                    tiles.move(toMove, "down", emptyCells[i].y, ctx, this.selectedIconsArr, emptyCells, callback);
                    emptyCells.splice(i,0,toMove);
                    function callback() {
                        emptyCells.splice(i+1,1);
                        game.updateLevel(emptyCells[i], toMove.image);
                        
                    console.log(emptyCells)};
                   
                    console.log(i + "icon above");


                }


            }
            //}
        }


        /**
         * replaces removed image with inserted image in the array with selected icons
         * @param {Object} removeObj 
         * @param {Object} addImg 
         */
        updateLevel(removeObj, addImg) {

            let index = this.selectedIconsArr.findIndex(obj => obj.x === removeObj.x && obj.y === removeObj.y);
            this.selectedIconsArr[index].image = addImg;
        }

        detectCell(canvas, e) {
            let mousePosition = mousePos(canvas, e);
            let self = this;
            self.validClick = false;

            if (mousePosition.x > grid.padding &&
                mousePosition.x < grid.width + grid.padding &&
                mousePosition.y > grid.padding &&
                mousePosition.y < grid.height + grid.padding) {
                self.validClick = true;
            } else {
                return;
            }

            function checkPos(position) {

                return mousePosition.x > position.x &&
                    mousePosition.x < position.xEnd &&
                    mousePosition.y > position.y &&
                    mousePosition.y < position.yEnd
            }



            self.clicked.push(self.cellPosArr.find(checkPos));
            console.log(self.clicked);

        }



        /*highlightAndSwap(canvas,e) {
            let selectedIconsArr = [].concat(...this.selectedIcons);
            let mousePosition = mousePos(canvas, e);
            let self = this;
        
                    // go through the array of all cell positions
                    for (let i = 0; i < self.cellPosArr.length; i++) {
        
                        // detect which cell was clicked
                        if (mousePosition.x > self.cellPosArr[i].x &&
                            mousePosition.x < self.cellPosArr[i].xEnd &&
                            mousePosition.y > self.cellPosArr[i].y &&
                            mousePosition.y < self.cellPosArr[i].yEnd) {
                            // if the same cell is clicked twice remove highlight
                            if (self.cellPosArr[i] === self.clicked[0] || self.cellPosArr[i] === self.clicked[1]) {
                                grid.removeHighlight(self.cellPosArr[i].x + grid.padding + 2.5, self.cellPosArr[i].y + grid.padding + 2.5, ctx);
                                self.clicked = self.clicked.filter(el => el !== self.cellPosArr[i]);
                                self.clickedIcon = self.clicked.filter(el => el !== i);
        
                            } else {
                                // if two cells were clicked remove the higlight from the first one that was clicked
                                if (self.clicked.length === 2) {
                                    grid.removeHighlight(self.clicked[0].x + grid.padding + 2.5, self.clicked[0].y + grid.padding + 2.5, ctx);
                                    self.clicked.shift();
                                    self.clickedIcon.shift();
                                }
                                //if one cell was clicked
                                if (self.clicked.length === 1) {
                                    // if the currently clicked one is adjacent to clicked, highlight it
                                    if ((self.cellPosArr[i].x === self.clicked[0].x &&
                                            Math.abs(self.clicked[0].y - self.cellPosArr[i].y) <= grid.intervalY + 0.5) ||
                                        (self.clicked[0].y === self.cellPosArr[i].y &&
                                            Math.abs(self.clicked[0].x - self.cellPosArr[i].x) <= grid.intervalX + 0.5)) {
                                        ctx.strokeStyle = "#000000";
                                        grid.highlightCell(self.cellPosArr[i].x + grid.padding + 2.5, self.cellPosArr[i].y + grid.padding + 2.5, ctx);*/

        /*let swapped = tiles.swap(selectedIconsArr[self.clickedIcon[0]].x, selectedIconsArr[self.clickedIcon[0]].y, selectedIconsArr[i].x, selectedIconsArr[i].y);
        selectedIconsArr[self.clickedIcon[0]].x = swapped[0];
        selectedIconsArr[self.clickedIcon[0]].y = swapped[1];
        selectedIconsArr[i].x = swapped[2];
        selectedIconsArr[i].y = swapped[3];
        tiles.update(selectedIconsArr[self.clickedIcon[0]].x, selectedIconsArr[self.clickedIcon[0]].y, selectedIconsArr[i].x, selectedIconsArr[i].y, selectedIconsArr[self.clickedIcon[0]].image, selectedIconsArr[i].image);*/
        /*self.clicked.push(self.cellPosArr[i]);
                                        self.clickedIcon.push(i);
                                    } else {
                                        // remove highlight from the previous one and add it to the current one
                                        grid.removeHighlight(self.clicked[0].x + grid.padding + 2.5, self.clicked[0].y + grid.padding + 2.5, ctx);
                                        self.clicked.shift();
                                        grid.highlightCell(self.cellPosArr[i].x + grid.padding + 2.5, self.cellPosArr[i].y + grid.padding + 2.5, ctx);
                                        self.clicked.push(self.cellPosArr[i]);
                                        self.clickedIcon.push(i);
                                    }
                                } else {
                                    ctx.strokeStyle = "#000000";
                                    grid.highlightCell(self.cellPosArr[i].x + grid.padding + 2.5, self.cellPosArr[i].y + grid.padding + 2.5, ctx);
                                    self.clicked.push(self.cellPosArr[i]);
                                    self.clickedIcon.push(i);
                                }
        
                            }
        
        
        
                        }
        
                    }
        }*/
    }

    let game = new Game(grid, tiles);
    game.drawLevel(ctx);
    console.log(game.findMatches());
    setTimeout(function () {
        game.removeMatches(ctx)
    }, 1000);
    /*setTimeout(function () {
        game.fillEmptyCells()
    }, 2000);*/
    /*setTimeout(function () {
        tiles.move(game.selectedIcons[0][0], "down", game.selectedIcons[5][0].y, ctx, [].concat(...game.selectedIcons))
    }, 3000);*/

    class InputHandler {
        constructor(game, grid) {

            /**
             * on click detect which cell was clicked and apply hihlighting logic
             */

            canvas.addEventListener("mousedown", function (e) {
                //game.highlightAndSwap(canvas,e);
                game.detectCell(canvas, e);

                //if clicked within the grid
                if (game.validClick) {
                    switch (game.clicked.length) {
                        // if there are no other highigted cells, highlight the clicked one
                        case 1:
                            grid.highlightCell(game.clicked[0].x, game.clicked[0].y, ctx);
                            break;
                            // if second cell is clicked
                        case 2:
                            // if it's the same as first, remove highlight
                            if (game.clicked[0] === game.clicked[1]) {
                                grid.removeHighlight(game.clicked[0].x, game.clicked[0].y, ctx);
                                game.clicked = [];
                                // if it's adjacent to the first, highlight it as well
                                // also, this is a condition when two cells can be swapped
                            } else if ((game.clicked[0].x === game.clicked[1].x &&
                                    Math.abs(game.clicked[0].y - game.clicked[1].y) <= grid.intervalY + 0.5) ||
                                (game.clicked[0].y === game.clicked[1].y &&
                                    Math.abs(game.clicked[0].x - game.clicked[1].x) <= grid.intervalX + 0.5)) {
                                grid.highlightCell(game.clicked[1].x, game.clicked[1].y, ctx);
                                game.validSwap = true;
                                // if not adjacent cell clicked remove highlight from thr first and add to the second
                            } else {
                                grid.removeHighlight(game.clicked[0].x, game.clicked[0].y, ctx);
                                grid.highlightCell(game.clicked[1].x, game.clicked[1].y, ctx);
                                game.clicked.shift();
                            }
                            break;
                            // if there are two highighted cells
                        case 3:
                            //if the third one is same as first or second, remove the highlight from it
                            if (game.clicked[1] === game.clicked[2] || game.clicked[0] === game.clicked[2]) {
                                grid.removeHighlight(game.clicked[2].x, game.clicked[2].y, ctx);
                                game.clicked = game.clicked.filter(el => el !== game.clicked[2]);
                                //if the third one is different, remove highlight from the first and the second and add to the third
                            } else {
                                grid.removeHighlight(game.clicked[0].x, game.clicked[0].y, ctx);
                                grid.removeHighlight(game.clicked[1].x, game.clicked[1].y, ctx);
                                grid.highlightCell(game.clicked[2].x, game.clicked[2].y, ctx);
                                game.clicked.splice(0, 2);
                            }



                    }
                }
            });
        }
    }



    let handle = new InputHandler(game, grid);



    function test(game, ctx, tiles) {
        console.log(game.selectedIcons);
        console.log(game.matches);
       /* let testArray = [...game.selectedIcons[0]];
        testArray[0].destinationY = 81;
        testArray[1].destinationY = 147;
        testArray[2].destinationY = 214;
        testArray[3].destinationY = 281;
        testArray[4].destinationY = 347;
        testArray.forEach(obj => obj.destinationX = obj.x);

    console.log(testArray);*/
        //game.matches.forEach(element => {ctx.clearRect(element.x, element.y, tiles.size, tiles.size)

        //});
        //tiles.move(testArray);
    }

    test(game, ctx, tiles);

    
}