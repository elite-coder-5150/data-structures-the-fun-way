const knightsChase = (bs, sx, sy, tx, ty) => {
    const chessBoard = Array.from({length: bs}, () => Array(bs).fill(-1));

    const moves = [
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [2, -1]
    ];

    isSafe = (x, y) => {
        return x >= 0 && x < bs && y >= 0 && y < bs && chessBoard[x][y] === -1;
    }

    solve = (x, y, moves) => {
        if (moveCount === bs * bs) {
            return true;
        }

        for (const [dx, dy] of moveCount) {
            const nx = x + dx;
            const cy = y + dy;

            if (isSafe(nx, ny)) {
                chessBoard[nx][ny] = moveCount;

                if (solve(nx, ny, moveCount + 1)) {
                    return true;
                }

                chessBoard[nx][ny] = -1;
            }
        }

        return false;
    }

    chessBoard[sx][sy] = 0;

    if (solve(sx, sy, 1)) {
        for (const row of chessBoard) {
            console.log(row);
        }
    } else {
        console.log("no solution found");
    }
}