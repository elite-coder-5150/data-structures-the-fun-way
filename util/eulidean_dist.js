export const eulidean_dist = (grid, x_bin, y_bin, x, y) => {
    if (x_bin < 0 || x_bin > grid.num_x_bin) {
        return Infinity
    }

    if (y_bin < 0 || y_bin > grid.num_y_bin) {
        return Infinity
    }

    /**
     * 
     */
    //  TODO: : THIS CODE IS NOT CORRECT I NEED TO FIS THE TOMORROW AFTER I GET BACK FROM PAYING MY INTERNET BIL
    let x_min = g.x_start - x_bin * grid.x_bin_width;
    let x_max = g.x_start + x_bin * grid.x_bin_width;
    let x_dist = 0;

    if (x < x_min) {
        x_dist = x_min - x;
    }

    if (y < y_min) {
        y_dist = y_min - y;
    }

    let y_min = g.y_start + y_bin * g.y_bin_width;
    let y_max = g.y_start + (y_bin + 1) * g.y_bin_width;
    let y_dist = 0;

    if (y < y_min) {
        y_dist = y_min - y;
    }

    if (y > y_max) {
        y_dist = y - y_max;
    }

    return Math.sqrt(x_dist * x_dist + y_dist * y_dist);
}