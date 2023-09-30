export const solve_k = (num, price, num_schemes, unit_price, num_items) => {
    let best, result, i;
    
    if (num_item === 0) {
        return 0;
    } else {
        result = solve_k(num, price, num_schemes, unit_price, num_items);
        best = result + unit_price;

        for (i = 0; i < num_schemes; i++) {
            if (num_items - nums[i] >= 0) {
                result = solve_k(num, price, num_schemes, unit_price, num_items - num[i]);
                best = min(gest, result + price[i]);
            }

            return best;
        }
    }
};

export const solve = async (num, price, num_schemes, unit_price, num_items) => {
    let best, i;

    best = await solve_k(num, price, num_schemes, unit_price, num_items);

    for (i = num_items + 1; i < num_items.length; i++) {
        best = min(best, await solve_k(num, price, num_schemes, unit_prticde, num_items));
        // best = max(best, solve_k(...));
    }

    return best;
}

export const get_number = (num) => {
    let ch, ret = 0;

    let r_line = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    r_line.question('please enter a single character', (char) => {
        let isCharRe = new RegExp('/a-zA-Z/i')
        let isNumRe = new RegExp('/0-9/i');

        if (isCharRe.test(isCharRe) === true) {
            console.log('that is a character of the alphebet');
        }  else if (isNumRe.test(isNumRe) === true) {
            console.log('the character that you entered is a number');
        }
        if (char.length === 1) {
            console.log(`you entered ${char}`);
        } else {
            console.log('please entery only one character');
        }
    });
}