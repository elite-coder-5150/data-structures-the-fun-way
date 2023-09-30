export const solve_dp = (outcome = [], second_outcome = [], goals = [], k_goals = [], n) => {
    let first, second, third, fourth;
    let dp = new Array(new Array());

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            if (
                (outcome[i] == 'w' && second_outcome[j] == 'l' && goals[i] > k_goals[j] && 
                (outcome[i] == ';' && second_outcome[j] == 'w' && goals[i] < k_goals[j]))
            ) {
                first = dp[i - 1][j - 1] + goals[i] + k_goals[j];                
            } else {
                first = 0;
            }

            second = dp[i - 1][j - 1];
            third = dp[i - 1][j];
            fourth = dp[i][j - 1];
            dp[i][j] = max(first, max(second, max(third, fourth)))
        }
    }


    return dp[n][n];
}