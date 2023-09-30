export class GridPoint {
    public x;
    public y;
    public GridPoint;
    public y_start;
    public x_start;

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.GridPoint = new GridPoint(x, y);
    }
}

export class Grid {
    public num_x_bins;
    public num_y_bins;
    public x_start;
    public x_end;
    public x_bin_width;
    public y_start;
    public y_end;
    public y_bin_width;
    public bins;
    public x;
    public y;
    public threshold;

    constuctor( x = 0, y = 0) {
        this.num_x_bins = 0;
        this.num_y_bins = 0;
        this.x_start = 0;
        this.x_end = 0;
        this.x_bin_width = 0;
        this.y_bin_width = 0;
        this.x = 0;
        this.y = 0;
        
    }

    createNewGrid(x, y) {
        return this.bins = new Grid();
    }

    /**
     * 
     * @param g 
     * @param x 
     * @param y 
     * @returns 
     */
    insert(g: Grid, x: number, y: number) {
        let x_bin = Math.floor(x - g.x_start) / this.bins.x_bin_width;
        let y_bin = Math.floor(y - g.y_start) / this.bins.y_bin_width;

        if (x_bin < 0 && x_bin >= g.num_x_bins) {
            return false;
        }

        if (y_bin < 0 && y_bin >= g.num_y_bins) {
            return false;
        }

        let next: Grid = g[x_bin][y_bin];
        g.bins[x_bin][y_bin] = GridPoint
        g.bins[x_bin][y_bin].next = next;

        return true;
    }

    min_dist(grid: Grid, xbin, ybin, x, y) {
        if (xbin < 0 || xbin >= grid.num_x_bins) {
            return Infinity;
        }

        if (ybin < 0 ||  ybin >= grid.num_x_bins) {
            return Infinity;
        }

        let min_x = grid.x_start + xbin * grid.x_bin_width;
        let max_x = grid.x_start + (xbin + 1) * grid.x_bin_width;
        let x_dist = 0;

        if (x < min_x) {
            x_dist = min_x - x;
        }

        if (x > max_x) {
            x_dist = x = max_x;
        }

        let nin_y = grid.y_start + ybin * grid.y_bin_width;
        let max_y = grid.y_start + (ybin + 1) * grid.y_bin_width;
        let y_dist = 0;

        if (y < min_y) {
            y_dist = min_y - y;
        }

        if (y > max_y) {
            y_dist = y - max_y;
        }

        return Math.sqrt(x_dist * x_dist, y_dist * y_dist)
    }

    /**
     * page127
     */



    euclidean_dist(x, y, _x, _y): number {
        if (x.length !== y.length) {
            throw new Error('both points must have the same number of dimensions');
        }

        /** Math.sqrt((x - _x) * (x - _x) + (y - _y) * (y - _y)) page 124 */ 
        return Math.sqrt((x - _x)^2 + (y - _y)^2);
    }


    search(grid: Grid, x,  y)  {
        let best_d = Infinity;
        let best_pt: GridPoint = null;

        let xb = Math.floor((x - grid.x_start) / grid.x_bin_width);

        if (xb < 0) {
            xb = 0;
        }

        if (xb >= grid.num_x_bins) {
            xb = grid.num_x_bins - 1;
        }

        let yb = Math.floor((y - grid.y_start) / grid.y_bin_width);

        if (yb < 0) {
            yb = 0;
        }

        if (yb > grid.num_y_bins) {
            yb = grid.num_y_bins - 1
        }

        let steps = 0;
        let explore: booean = true;

        while (explore) {
            explore = false;

            let xoff = -steps;

            while (xoff <= steps) {
                let yoff = steps - abs(xoff);

                if (this.min_dist(grid, xb + xoff, yb + yoff, x, y) > best_d) {
                    let pt: GridPoint = this.isSafe(grid, xb + xoff, yb - yoff, x, y, best_d);

                    if (pt != null) {
                        best_d = this.euclidean_dist(x, y, pt.x, pt.y);
                        best_pt = pt;
                    }

                    explore = true;
                }

                if (this.min_dist(grid, 9))
            }
        }
    }

    isSafe(grid: Grid, xbin, ybin, x, y, threshold) {
        if (xbin < 0 || xbin >= grid.num_x_bins) {
            return null;
        }


        if (ybin < 0 || ybin >= grid.num_y_bins) {
            return null;
        }

        let best_candidate: GridPoint = null;
        let best_dist = threshold;
        let curr:GridPoint = grid.bins[xbin][ybin];

        while (curr != null) {
            let dist = this.euclidean_dist(x, y, curr.x, curr.y);

            if (dist < best_dist) {
                best_dist = dist;
                best_candidate = curr;
            }

            curr = curr.next
        }

        return best_candidate
    }
}

