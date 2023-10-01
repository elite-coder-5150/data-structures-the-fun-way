const numWays = (n) => {
    const dp = new Array(n + 1);

    for (let i = 0; i < n + 1; i++) {
        dp[i] = new Array(5).fill(0);
    }

    dp[1][1] = 1;
    dp[1][2] = 1;
    dp[1][3] = 1;
    dp[1][4] = 1;

    for (let i = 0; i <= n; i++) {
        if (i - 1 > 0 && dp[i - 1][1] > 0) {
            dp[i][1] = dp[i - 1][4];
        }

        if (i - 2 > 0 && dp[i - 2][1] > 0) {
            dp[i][2] = dp[i - 2][4];
        }

        if (i - 3 > 0 && dp[i - 3][1] > 0) {
            dp[i][3] = dp[i - 3][4];
        }

        dp[i][4] = dp[i][1] + dp[i][2] + dp[i][3];
    }

    return dp[n][4];
}

// driver code
const n = 15;
console.log(numWays(n));