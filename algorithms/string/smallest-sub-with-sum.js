const smallestSubWithSum = (arr, n, x) => {
    let min_len = n + 1;

    for (let start = 0; start < n; start++) {
        let curr_sum = arr[start];

        if (curr_sum > x) {
            return 1;
        }

        for (let end = start + 1; end < n; end++) {
            curr_sum += arr[end];

            if (curr_sum > x && (end - start + 1) < min_len) {
                min_len = (end - start + 1);
            }
        }
    }

    return min_len;
}

/** driver code **/
let arr = [1, 4, 45, 6, 0, 19];
let x = 51;
let n = arr.length;
let result = smallestSubWithSum(arr, n, x);
