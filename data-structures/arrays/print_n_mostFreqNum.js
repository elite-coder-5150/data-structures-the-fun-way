export const print_n_most_freq_number = (arr, n, k) => {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) map.set(arr[i], map.get(arr[i]) + 1);
        else map.set(arr[i], 1);
    }
    let res = [];
    for (let [key, value] of map) {
        res.push({ key, value });
    }
    res.sort((a, b) => b.value - a.value);
    for (let i = 0; i < n; i++) {
        console.log(res[i].key);
    }
}   

let arr = [3, 1, 4, 4, 5, 2, 6, 1];
let n = arr.length;
let k = 2;

print_n_most_freq_number(arr, n, k);

export const best_most_freq_number = (arr, n, k) => {
    let mp = new Map();

    for (let i = 0; i < n; i++) {
        if (!mp.has(arr[i])) {
            mp.set(arr[i], 0);
        }

        mp.set(arr[i], mp.get(arr[i]) + 1)
    }

    let queue = [...mp];

    queue.sort((a, b) => {
        if (a[1] == b[1]) {
            return b[0] - a[0];
        } else {
            return b[1] - a[1];
        }
    });

    document.write(k + " number with most " + " occurances are: ");

    for (let i = 0; i < k; i++) {
        document.write(queue[i][0] + " ");
    }
}