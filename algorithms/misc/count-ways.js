const countWays = (n, arr, len) => {
    if (n == 0) {
        return 1;
    }

    let no_ways = 0;

    for (let i = 0; i < len; i++) {
        if (n - arr[i] >= 0) {
            no_ways += countWays(n - arr[i]. arr, len);
        }
    }

    return no_ways;
}

let arr = [1, 3, 5];
let len = arr.length;
let n = 5;

document.write(countWays(n, arr, len));