const reverse = (n) => {
    let temp = n, rev = 0, r;

    while (temp) {
        r = temp % 10;
        rev = rev * 10 + r;
        temp = parseInt(temp / 10);
    }

    return rev;
}

const countPairs = (arr, n) => {
    let u_map = new Map();
    let pairs = 0;

    for (let i = 0; i < n; i++) {
        let val = arr[i] - reverse(arr[i]);

        pairs += u_map.has(val) ? u_map.get(val) : 0;

        if (u_map.has(val)) {
            u_map.set(val, u_map.get(val) + 1);
        } else {
            u_map.set(val, 1);
        }
    }

    document.write(pairs);
}

// driver code
let arr = [2, 15, 11, 7];
let n = arr.length;

countPairs(arr, n);