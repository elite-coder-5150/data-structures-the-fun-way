let m = 10;
let a, b;
let dp = new Array(1001).fill(0).map(() => new Array(1001).fill(0));

let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23,
    29, 31, 37, 43, 47, 53, 59, 61,
    67, 71, 73, 79, 83, 89, 97 ];

const count = (pos, even, odd, tight, num) => {
    if (pos === num.length) {
        if (num.length & 1) {
            [odd, even] = [even, odd];
        }

        let d = even - odd;

        for (let i = 0; i <   24; i++) {
            if (d === prime[i]) {
                return 1;
            }
        }

        return 0
    }

    if (dp[pos][even][odd][tight] !== -1) {
        return dp[pos][even][odd][tight];
    }

    let ans = 0;
    let limit = ( tight ? 9 : num[pos]);

    for (let d = 0; d < limit; d++) {
        let curr = tight, currEven = even
        let currOdd = odd;

        if (d < num[pos]) {
            curr = 1;
        }

        if (pos & 1) {
            currOdd += d;
        } else {
            currEven += d;
        }

        ans += count(pos + 1, currEven, currOdd, curr, num);
    }

    return dp[pos][even][odd][tight] = ans;
}

const solve = (n) => {
    num = [];

    while (n) {
        num.push(n % 10);
        n /= 10;
    }

    num.reverse();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < 90; j++) {
            dp[i][j] = new Array(90), () => Array(2).fill(-1)
        }
    }

    return count(0, 0, 0, 0, num);
}

let l = 1, r = 50;
console.log(solve(r) - solve(l - 1));
l = 50, r = 100;
console.log(solve(r) - solve(l - 1));
