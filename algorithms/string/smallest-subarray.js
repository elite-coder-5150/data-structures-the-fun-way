const smallestSubarray = (k, s, arr, n) => {
    let ans = Infinity;

    for (let i = 0 ; i < n; i++) {
        let size = 0,
            sum = 0;

        for (let j = i; j < n; j++) {
            size += 1;
            sum += arr[j];

            if (size > k && sum > s) {
                if (size < ans) {
                    ans = size;
                }
            }
        }
    }

    return ans;
}

let array = [1, 2, 3, 4, 5];
let k = 1;
let s = 8;
let n = arr.length;

console.log(smallestSubarray(k, s, arr, n));