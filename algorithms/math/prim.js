const prime = (n) => {
    let result = [1, n];

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result.push(i);
            result.push(n / i);
        }
    }

    return result.sort((a, b) => a - b);
}

const num = 90;
console.log("Prime factors of " + num + " are: " + prime(num));

const rec_factor = (n, d) => {
    if (n < 2) {
        return 1;
    }

    if (n % d === 0) {
        return d * rec_factor(n / d, d);
    } else {
        return rec_factor(n, d + 1);
    }
}
