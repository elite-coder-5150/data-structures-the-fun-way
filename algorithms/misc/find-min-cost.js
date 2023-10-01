const findMinCost = (arr, n, choc_cost) => {
    let choc_buy = arr[0];
    let curr_choc = 0;

    for (let i = 0; i < n - 1; i++) {
        curr_choc = Math.min(choc_buy, arr[i + 1]);
        choc_buy = curr_choc + choc_cost * (i + 1);

        if (choc_buy > arr[i + 1]) {
            choc_buy = arr[i + 1];
        }
    }

    return (choc_buy * choc_cost);
}

/** driver codem */
const arr = [ 10, 6, 22, 6, 7, 1 ];
let n = 6;
let p = 5;

document.write(findMinCost(arr, n, p));