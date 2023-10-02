const getPower = (p) => {
    let res = 1;

    while (p--) {
        res *= 5;
    }

    return res;
}

const countNumUtil = (n) => {
    let count = 0;
    let digits = [];

    while (n) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }

    digits.reverse();

    let d = digits.length;

    for (let i = 1; i <= d; i++) {
        let res = getPower(i);

        if (i === d) {
            for (let p = 1; p <= d; p++) {
                let x = digits[p - 1];
                let temp = 0;

                // TODO: fix this error
                if (p % 2 === 0) {
                    // temp = (5 -  parseInt((x / (2 + 1)) * getPower(d - p);
                }
            }
        }
    }
}

// ---------------------------------------------------
//           Using Dynamic Programming
// ---------------------------------------------------
let dp = [...Array(20)].map(() =>
                    [...Array(2)].map(() =>
                    [...Array(2)].map(() =>
                        Array(2).fill(-1))));

const f = (nums, idx, even, leadingZeros, tight) => {
    if (idx === 0) {
        return 1;
    }

    if (dp[idx][even][leadingZeros][tight] !== -1) {
        return dp[idx][even][leadingZeros][tight];
    }

    let count = 0;

    if (even === 0) {
        if (!leadingZeros === 1) {
            count += f(nums, idx - 1, 0, 0, 0);
        }

        let digs = [1, 3, 5, 7, 9];
        let ub = (tight === 1) ? parseInt(nums[nums.length - idx]) : 9;

        for (let i of digs) {
            if (i <= ub) {
                count += f(nums, idx - 1, 1, 0, (i === ub) ? tight : 0);
            }
        }
    }

    dp[idx][even][leadingZeros][tight] = count;
    return count;
}

// driver code
let l = 128, r = 163;
let _l = (l - 1).toString();
let _r = r.toString();

dp = [...Array(20)].map(() => [...Array(2)].map(() => [...Array(2)].map(() => Array(2).fill(-1))));
let ans = f(l, l.length, 0, 1, 1);
dp = [...Array(20)].map(() => [...Array(2)].map(() => [...Array(2)].map(() => Array(2).fill(-1))));
let _ans = f(r, r.length, 0, 1, 1);

console.log(_ans - ans);
