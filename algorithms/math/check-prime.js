const sum_odd = (n) => {
    let sum = 0, pos = 1;

    while (n) {
        let d = n % 10;

        if (pos % 2 === 1) {
            sum += d;
        }

        pos++;
        n /= 10;
    }

    return sum;
}

const check_prime = (n) => {
    if (n === 1) {
        return false;
    }

    if (n === 2) {
        return true;
    }

    if (n % 2 === 0) {
        return false;
    }

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}


// driver code
let n = 223;
let sum = sum_odd(n);

if (check_prime(sum)) {
    console.log("YES");
} else {
    console.log("NO");
}
