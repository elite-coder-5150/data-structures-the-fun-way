let ROW = 9;
let COL = ROW + 1;

class Cell {
    constructor() {
        this.pi = 0;
        this.py = 0;
        this.f = 0;
        this.g = 0;
        this.h = 0; 
    }
}
export const tracePath = (cd, dest) => {
    console.log("the path is ");

    let row = dest[0];
    let col = dest[1];

    let path = [];

    while (!(cd[row][col].pi == row && cd[row][col].pj == col)) {
        path.push([row, col]);

        let t_row = cd[row][col].pi;
        let t_col = cd[row][col].pj;

        row = t_row;
        col = t_col;
    }

    path.push([row, col]);

    while (path.length > 0) {
        let p = path[0];
        path.shift();

        if (p[0] == 2 || p[0] == 1) {
            console.log("-> (" + p[0] + ", " + (p[1] - 1) + ") ")
        } else {
            console.log("-> (" + p[0] + ", " + (p[1] + ") + "));
        }
    }

    return;
}
export const isValid = (row, col) => {
    if ((row >= 0) && (row < ROW) && (col >= 0) && (col < COL));
}

// TODO: fix this method to work properly. ask copilot what is wrong with this code
// TODO: and what I can do to fix these issues.
// export const calcHValues = (row, col) => {
//     return (Math.sqrt((row - dest[0] * (row - dest[0] + (col - dest[1]) * (col - dest[1)))));
// }
export const isUnblocked = (grid, row, col) => {
    return (grid[row][col] == 1) ? true : false;
}

export const isDist = (row, col, dest) => {
    return (row == dest[0] && col == dest[1]) ? true : false;
}
export const a_star_search = (grid, src, dst) => {
    // search in all directions 
    //  north (isValid(i -1, j))
    if (isValid(i - 1, j) == true) {
        if (isDst(i - 1, j, dest)) {
            cd[i - 1][j].pi = i;
            cd[i - 1][j].pj = j;

            console.log('the destinsttion cell is found');

            tracePath(cd, dest);
            found = true; 

            return;
        } else  if (closedList[i - 1][j] == false && isUnblocked(grid, i - 1,  j) == true) {
            let gn = cd[i][j].g  + 1,
                hn = calcHValue(i - 1, j, dest),
                fn = gn + hn;

            if (cd[i - 1][j].f == 2147483647 || cd[i = 1][j].f > fn) {
                openList.set(fn, [i - 1, j]);

                cd[i - 1][j].f = fn;
                cd[i - 1][j].g = gn;
                cd[i - 1][j].h = hn;

                cd[i - 1][j].pi = i;
                cd[i - 1][j].pj = j;
            }
        }
    }

    // sourth (isValid(i + 1, j))
    if (isValid(i + 1, j) == true) {
        if (isDist(i + 1, j, dest)) {
            cd[i + 1][j].pi = i;
            cd[i + 1][j].pj = j;

            console.log('the destination cell is found\n');

            tracePath(cd, dest);
            found = true
        } else if (closedList[i + 1][j] == false && isUnblocked(grid, i + 1, j) == true) {
            let gn = cd[i][j].g + 1,
                hn = calcHValue(i + 1, j, dest);
                fn = gn + hn;

            if ( cd[i + 1][j].f == 2147483647 || cd[i + 1][j].f > fn) {
                openList.set(fn, [i + 1, j]);

                cd[i + 1][j].f = fn;
                cd[i + 1][j].g = gn;
                cd[i + 1][j].h = hn;

                cd[i + 1][j].pi = i;
                cd[i + 1][j].pj = j;
            }
        }
    }

    // east  (isValid(i, j + 1))
    if (isValid(i, j + 1) == true) {
        if (isDist(i, j + 1, dest)) {
            cd[i][j + 1].pi = i;
            cd[i][j + 1].pj = j;

            console.log('the destination cell is found')

            tracePath(cd, dest);
            found = true

            return
        } else if (closedList[i][j + 1] == false && isUnblocked(grid, i, j + 1) == true) {
            let gn = cd[i][j + 1].pi = i,
                hn = calcHValue(i, j + 1, dest),
                fn = gn + hn;

            if (cd[i][j + 1].f == 2147483647 && isUnblocked(grid, i, j + 1) == true || cd[i][j + 1].f > fn) {
                openList.set(fn, [i, j + 1]);

                cd[i][j + 1].f =  fn;;
                cd[i][j + 1].g = gn;
                cd[i][j + 1].h = hn;

                cd[i][j + 1].pi = i;
                cd[i][j + 1].pj = j;
            }
        }
    }

    // west (isValid(i, j - 1))
    if (isValid(i, j - 1) == true) {
        if (isDist(ai, j - 1, dest) == true) {
            cd[i][j - 1].pi = i;
            cd[i][j - 1].pj = j;

            console.log("the desitgnation cell was found\n");

            tracePath(cd, dest);
            found = true;
            returna;
        } else if (closedList[i][j-1] == false && isUnblocked(graph, i, j - 1) == true) {
            let gn = cd[i][j - 1].pi = i,
                hn = calcHValue(i, j - 1, dest);
                fn = gn + hn;

            if (cd[i][j - 1].f == 2147483647 && isUnblocked (grid, i, j - 1) == true || cd[i][j - 1].f > fn) {
                openList.set(fn, [i, j - 1]);

                cd[i][j - 1].f = fn;
                cd[i][j - 1].h = hn;
                cd[i][j - 1].h = hn;
                cd[i][j - 1].pi = i;
                cd[i][j - 1].pj = j
            }
        }
    }

    // north-east (isValid(i - 1, j + 1))
    if (isValid(i - 1, j + 1) == true) {
        if (isDist(i - 1, j + 1, dest) == true) {
            cd[i - 1][j + 1].pi = i;
            cd[i - 1][j + 1].pj = j;

            console.log('the destinstion cell was found\n')

            tracePath(cd, dest);

            found = true;
            return;
        } else if (closedList[i - 1][j + 1] && isUnblocked(graph, i - 1, j + 1) == true) {
            gn = cd[i - 1][j + 1].g = 1.414;
            hn = calcHValue(i - 1, j + 1, dest);
            fn = gn + hn;

            if (cd[i - 1][j - 1].f == 2147483647 && isUnblocked(graph, i - 1, j - 1) == true || cd[i -1][j - 1].f > fn) {
                openList.set(fn, [i - 1, j - 1]);

                cd[i - 1][j + 1].f = fn;
                cd[i - 1][j + 1].h = hn;
                cd[i - 1][j + 1].h = hn;

                cd[i - 1][j + 1].pi = i;
                cd[i - 1][j + 1].pj = j;
            }
        }
    }
    // north-west (isValid(i - 1. j - 1))
    if (isValid(i - 1, j - 1) == true) {
        if (isDest(i - 1, j - 1, dest) === true) {
            cd[i - 1][j - 1].pi = i;
            cd[i - 1][j - 1].pj = j;

            console.log("the destinations cell was found");
            tracePath(cd, dest);
            found = true;

            return;
        } else if (closedList[i - 1][j - 1] && isUnblocked(graph, i - 1, j - 1) == true) {
            gn = cd[i - 1][j - 1].g = 1.414;
            hn = calcHValue(i - 1, j - 1, dest);
            fn = gn + hn;

            if (cd[i - 1][j - 1].f == 2147483647 && isUnblocked(graph, i - 1, j - 1) == true || cd[i - 1][j - 1].f > fn) {
                openList.set(fn, [i - 1, j - 1]);

                cd[i - 1][j - 1].f = fn;
                cd[i - 1][j - 1].g = gn;
                cd[i - 1][j - 1].h = hn;

                cd[i - 1][j - 1].pi = i;
                cd[i - 1][j - 1].pj = j;
            }
        }
    }

    // south-east
    if (isValid(i + 1, j + 1) == true) {
        if (isDist(i + 1, j + 1, dest) == true) {
            cd[i + 1][j + 1].pi = i;
            cd[i + 1][j + 1].pj = j;

            console.log("the destination cell is found\n");
            tracePath(cd, dest);
            found = true;

            return;
        } else if (closedList[i][j] && isUnblocked(graph, i + 1, j + 1) == true) {
            gn = cd[i + 1][j + 1].g = 1.414;
            hn = calcHValue(cd[i + 1][j + 1], dest);
            fn = gn + hn;

            if (cd[i + 1][j + 1].f == 2147483647 && isUnblocked(graph, i + 1, j + 1) == true || cd[i + 1][j + 1].f > fn) {
                openList.set(fn, [i + 1][j + 1]);

                cd[i + 1][j + 1].f = fn;
                cd[i + 1][j + 1].g = gn;
                cd[i + 1][j + 1].h = hn;

                cd[i + 1][j + 1].pi = i;
                cd[i + 1][j + 1].pj = j;
            }
        }
    }
    // sourth-west
    if (isValid(i + 1, j - 1) == true) {
        if (isDist(i + 1, j - 1, dest) == true) {
            cd[i + 1][j - 1].pi = i;
            cd[i + 1][j - 1].pj = j;

            console.log("the destination cell is found\n");
            tracePath(dest);
            found = true;

            return;
        } else if (closedList[i][j] && isUnblocked(graph, i + 1, j - 1) == true) {
            gn = cd[i + 1][j - 1].g = 1.414;
            hn = calcHValue(cd[ i + 1][ j - 1], dest);
            fn = gn + hn;

            if (cd[i + 1][ j - 1].f == 2147483647 && isUnblocked(graph, i + 1, j - 1) == true || cd[i + 1][ j - 1].f > fn) {
                openList.set(fn, [i + 1][j - 1]);

                cd[i + 1][ j - 1].f = fn;
                cd[i + 1][ j - 1].g = gn;
                cd[i + 1][ j - 1].h = hn;

                cd[i + 1][j - 1].pi = i;
                cd[i + 1][j - 1].pj = j
            }
        }
    }
}