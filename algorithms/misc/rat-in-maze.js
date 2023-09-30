export const solveMaze = (max) => {
    const rows = maze.length;
    const cols = maze[0].length;

    const solution = Array.from({length: rows}, () => Array(cols).fill(0));

    const isSafe = (a, b) => {
        return x >= 0 && x < rows && y >= 0 && y < cols && maze[x][y] === 0;
    }

    const findPath = (a, b) => {
        if (x === rows - 1 && y === cols - 1) {
            solution[x][y] = 1;
            return true;
        }

        if (isSafe(a, b)) {
            solution[x][y] = 1;

            if (findPath(x, y + 1)) {
                return true;
            }

            if (findPath(x + 1, y)) {
                return true;
            }

            solution[x][y] = 0;
            return false;
        }

        return false;
    }

    if (!findPath(0, 0)) {
        console.log('no path found');
    } else {
        console.log('solution: ');

        for (let i = 0; i < rows; i++) {
            console.log(solution[i].join(" "));
        }
    }
}

const maze = [
    [0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0]
];

solveMaze(maze);
// finally solved the rat in a maze algorithm.