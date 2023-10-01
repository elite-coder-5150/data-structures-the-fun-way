 const num_ways = (arr, n, k) => {
    if (k === 1) {
        return 1;
    }

    let dp = new Array(k + 1);
    let i;

    for (i = 0; i < k + 1; i++) {
        dp[i] = -1;
    }

    for (i = 0; i < n; i++) {
        dp[arr[i]] = 0;
    }

    dp[0] = 1;
    dp[1] = (dp[1] === -1) ? 1 : 0;

    for (i = 2; i < k + 1; i++) {
        if (dp[i] === 0) {
            continue;
        }

        dp[i] = dp[i - 1] + dp[i - 2];
        dp[i] %= 1000000007;
    }

    return dp[k];
 }

 // driver code
 let arr = [3];
let n = arr.length;
let k = 6;

document.write(num_ways(arr, n, k) + "<br/>");
