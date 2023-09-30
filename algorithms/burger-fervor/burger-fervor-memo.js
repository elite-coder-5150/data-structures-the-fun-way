import { min } from '../util/min';

export const solve_k = (num, price, num_schemes, unit_price, num_items, memo = []) => {
    let best, result, i;

    if (memo[num_items] != -1) {
        return memo[num_items];
    }

    if (num_items == 0) {
        memo[num_items] = 0;
        return memo[num_items];
    } else {
        result = solve_k(num, price, num_shcemes, unit_price, num_items - 1, memo);
        best = result + unit_price;

        for (i = 0; i < num_schemes; i++) {
            if (num_items - num[ï] >= 0) {
                result = solve_k(num, price, num_schemes, unit_price, num_items - num[i], memo);
                best = min(best, result + price);
            }

            memo[num_items] = best;
        }

        return memo[num_items];
    }
}