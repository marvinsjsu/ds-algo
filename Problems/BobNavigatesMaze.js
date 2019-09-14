const MOVES = {
    right: {y: 0, x: 1},
    left: {y: 0, x: -1},
    north: {y: -1, x: 0},
    south: {y: 1, x: 0}
};

function minMoves(maze, x, y) {
  let stepCount = 0;


  return stepCount;
}

function find(maze, currPos, destination) {

}

function getOptions(maze, currPos) {
    let options = [];
    let newX = currPos.x;
    let newY = currPos.y;
    let val = 0;
    for (let move in MOVES) {
        newX += move.x;
        newY += move.y;
        val = maze[newX][newY];
        if (val === 0 || val === 2) {
            options.push({
                x: newX,
                y: newY
            });
        }
    }

    return options;
}