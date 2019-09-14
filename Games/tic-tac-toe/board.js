
const ROWS = 3;
const COLS = 3;

class Board {
  constructor () {
    this.grid = Board.buildGrid();
    this.marks = ['x', 'o'];
  }

  printGrid () {
    const output = [];
    let row;
    for (let i = 0; i < this.grid.length; i++) {
      row = [];
      for (let j = 0; j < this.grid[i].length; j++) {
        row.push(this.grid[i][j] ? this.grid[i][j] : " ");
      }
      output.push(row.join('|') + '\n');
    }
    console.log(output.join('-----\n'));
  }

  isValidPos (pos) {
    return (pos[0] >= 0 && pos[0] < this.grid.length)
      && (pos[1] >= 0 && pos[1] < this.grid[0].length);
  }

  placeMark (pos, mark) {
    if (!this.isEmpty(pos)) {
      throw new Error('position taken');
    }

    this.grid[pos[0]][pos[1]] = mark;
  }

  isEmpty (pos) {
    return this.grid[pos[0]][pos[1]] === null;
  }

  won () {
    const win = this.winningPositions();
    let currMark;
    this.marks.forEach((mark) => {
      currMark = mark;
      let won, pos;
      for (let i = 0; i < win.length; i++) {
        won = true;
        for (let j = 0; j < win[i].length; j++) {
          pos = win[i][j];
          if (this.grid[pos[0]][pos[1]] != mark) {
            won = false;
          }
        }

        if (won) {
          return true;
        }
      }
    });
  }

  winningPositions () {
    const positions = [
      // horizontal positions
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      // vertical positions
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      // diagonal positions
      [[0, 0], [1, 1], [2, 2]],
      [[2, 0], [1, 1], [0, 2]]
    ];
  }

  static buildGrid () {
    const grid = [];

    for (let i = 0; i < ROWS; i++) {
      grid.push([]);
      for (let j = 0; j < COLS; j++) {
        grid[i].push(null);
      }
    }

    return grid;
  }
}