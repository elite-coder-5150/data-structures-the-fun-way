class ChessBoard {
    constructor() {
        this.board
    }

    createEmptyBoard() {
        const board = [];

        for (let i = 0; i < 8; i++) {
            board.push(Array(8).fill(null));
        }

        return board;
    }

    clearSquare(row, col) {
        if (this.isSafe()) {
            this.board[row][col] = null;
        }
    }

    placePiece(piece, row, col) {
        if (this.isSafe()) {
            this.board[row][col] = piece;
        }
    }

    isSafe(row, col) {
        if (row >= 0 && row <= 8 && col >= 0 && col <= 8) {
            return true;
        }

        return false;
    }
}

