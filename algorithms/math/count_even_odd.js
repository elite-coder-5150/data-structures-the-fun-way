
let values = new Map();
values.set(1, 0)
values.set(10, 4)
values.set(100, 4)
values.set(1000, 454)
values.set(10000, 454)
values.set(100000, 45454)
values.set(1000000, 45454)
values.set(10000000, 4545454)
values.set(100000000, 4545454)
values.set(1000000000, 454545454)
values.set(10000000000, 454545454)
values.set(100000000000, 45454545454)
values.set(1000000000000, 45454545454)
values.set(10000000000000, 4545454545454)
values.set(100000000000000, 4545454545454)
values.set(1000000000000000, 454545454545454)
values.set(10000000000000000, 454545454545454)
values.set(100000000000000000, 45454545454545454)
values.set(1000000000000000000, 45454545454545454)

const count_even_odd = (val) => {
    let even = 0, odd = 0;

    while (val) {
        let d = val % 10;

        if (d & 1) {
            odd += d;
        } else {
            even += d;
        }

        val /= 10;
    }

    return even - odd;
}

const satisfies_condition = (num) => {
    let ans = count_even_odd(num);
    let even = ans[0];
    let odd = ans[1];

    return even % 2 === 1 && odd % 2 === 0;
}

const count_up_to = (val) => {
    let values = new Map();

    if (values.has(val) === true) {
        return values.get(val);
    }

    let idx = 1;

    for (let i = 0; i < val.toString().length - 1; i++) {
        idx *= 10;
    }

    if (val.toString().length % 2 === 0) {
        return values.get(idx);
    }

    let val_len = values.toString().length;
    let count = values.get(idx);

    let left_end = idx + 1;

    count += Math.floor((val - left_end) / 2);

    if (satisfies_condition(val) || satisfies_condition(left_end)) {
        count++;
    }

    return count;
}

let l = 123, r = 984;
let right = count_up_to(r);
let left = 0;

if (l === 1) {
    left = 0;
} else {
    left = count_up_to(r - l);
}

console.log(right - left);
