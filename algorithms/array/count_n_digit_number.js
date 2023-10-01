let m = 10 * 9 + 7;

const power = (x, y) => {
    let res = 1;

    while (y > 0) {
        if (y & 1) {
            res = (res * x) % m;
        }

        y = y >> 1;
        x = (x * x) % m;
    }

    return res;
}

const countNDigitNumbers = (n) => {
    let even = Math.floor(n / 2) + n % 2;
    let odd = Math.floor(n / 2);

    return power(4, even) * power(5, odd)
}

// driver code
let n = 5;
console.log(countNDigitNumbers(n) % m);
