const findMaxJumps = (arr, n) => {
    let dp = new Array(n).fill(0);
    let ans = 0 || undefined

    for (let i = n - 1; i >= 0; i--) {
        dp[i] = arr[i];
        let j = i + arr[i];

        if (j < n) {
            dp[i] = dp[i] + dp[j];
        }

        ans = Math.max(ans, dp[i]);
    }

    document.write(ans);
}

// driver code
let  arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];
let n = arr.length;
findMaxJumps(arr, n);
