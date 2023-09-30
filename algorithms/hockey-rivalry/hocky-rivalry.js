 const SIZE = 1000;

export const solve_m = (outcome = [], another_outcome = [],  goals = [], k_goals = [], 
    i, j, memo = [SIZE + 1][SIZE + 1]) => {
    let first, second, third, fourth;

    if (memo[i][j] !== -1) {
        return memo[i][j];
    }

    if (i === 0 || j === 0) {
        memo[i][j] = 0;
        return memo[i][j];
    }

    /** this code has some errors 
    if ((outcomes[i] === 'w' && secound_outcomea[j] === 'l') && 
        goals[i] > k_goals[j) ||  (outcomes[i] === 'l' && secound_outcome[j] === 'w' && 
        goals[i] < k_goals[j] {
        first = solve_m(outcomes, secound_outcomes, goals, k_goals, i - 1, j - 1, memo) + 
            goals[i] + k_goals[j];
    } else {
        first = 0;
    } */
}