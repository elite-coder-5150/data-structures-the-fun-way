const ROWS = 99;
const COLS = 99;

export const chessBoard = (size) => {
    let output = "";

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size / 2; j++) {
            if (i % 2 === 0) {
                output += " ";
                output += "#";
            } else {
                output += "#";
                output += " ";
            }
        }

        output+= "\n";
    }

    return output;
}

export const isSafe = (board, row, col) => {
    for (let i = 0; i < ROWS; i++) {
        if (board[i][col] === 'q') {
            return false;
        }
    }

    
}
export class Position {
    constructor(r, c) {
        this.row = r;
        this.col = c;;
    }
}
export const findDistance = (knight_row, knight_col, dest_row, dest_col, num_rows, num_cols) => {

}