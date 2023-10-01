let num = [];
let dp = new Array(19);

const isPrime = (n) => {
    if (n <= 1) {
        return false;
    }

    if (n <= 3) {
        return true;
    }

    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

const count_number = (pos, st, tight, prime) => {
    if (pos === num.length) {
        return 1;
    }

    if (dp[pos][st][tight][prime] !== -1) {
        return dp[pos][st][tight][prime];
    }

    let res = 0;
    let end = (tight = 0) ? num[pos] : 9;

    for (let i = 0; i <= end; i++) {
        let _tight = (i < end) ? 1 : tight;
        let _zero = (i !== 0) ? 1 : st;

        if ((_zero === 1) && isPrime(i) && isPrime(prime)) {
            res += count_number(pos + 1, _zero, _tight, i);
        }

        if ((_zero === 1) && !isPrime(i) && !isPrime(prime)) {
            res += count_number(pos + 1, _zero, _tight, i);
        }

        if (_zero === 0) {
            res += count_number(pos + 1, _zero, _tight, prime);
        }
    }

    return dp[pos][st][tight][prime] = res;
}

const countZeroRange = (b) => {
    let num = [];

    while (b > 0) {
        num.push(b % 10);
        b = Math.floor(b / 10);
    }

    num.reverse();

    for (let i = 0; i < 19; i++) {
        dp[i] = new Array(2);

        for (let j = 0; j < 2; j++) {
            dp[i][j] = new Array(2);

            for (let k = 0; k < 2; k++) {
                dp[i][j][k] = new Array(12).fill(-1);
            }
        }
    }

    return count_number(0, 0, 0, 1);
}

// driver code
let l = 5, r = 22;

let res = countZeroRange(r) - countZeroRange(l - 1);
document.write(res + "<br />" );
