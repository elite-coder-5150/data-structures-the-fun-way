let m, n, d;
let v = [];
let k = 1000000007;
let dp = Array(2000);

for (let i = 0; i < 2001; i++) {
    dp[i] = Array.from(Array(2001), () => Array(2001).fill(-1));
}
const init = (l) => {
    for (let i = 0; i < 2001; i++) {
        for (j = 0; j < 2001; j++) {
            for (let k = 0; k < 2001; k++) {
                dp[i][j][k] = -1;
            }
        }
    }

    v = [];

    for (let i = 0; i < l.length; i++) {
        v.push(l[i].charCodeAt(0) - '0'.charCodeAt(0));
    }

    n = l.length;
}

const number_minus_one = (a) => {
    let s = a.substring(l);
    let _s = "";

    for (let i = 0; i < s.length; i++) {
        _s += '0';
    }

    if (a[0] === '1' && s === _s) {
        let l = s.length;
        a = a.replace(a[0], '0');

        for (let i = 0; i < l; i++) {
            a += '9';
        }
    } else {
        for (let i = a.length - 1; i >= 0; i--) {
            if (a[i] !== '0') {
                a = a.replace(a[i], a[i], '9');
            } else {
                a = a.replace(a[i], String.fromCharCode(((a[i].charCodeAt(0) - '0'.charCodeAt(0) - 1 + 10) % 10 + '0'.charCodeAt(0))));
                break;
            }

        }
    }

    return a.toString();
}

const _f = (pos, sum, f) => {
    if (pos === n) {
        if (sum === 0) {
            return 1
        }

        return 0;
    }

    if (dp[pos][sum][f] !== -1) {
        return dp[pos][sum][f];
    }

    let lmt = 9;

    if (f === 0) {
        lmt = v[pos];
    }

    let ans = 0;

    for (let i = 0; i <= lmt; i++) {
        if (i === d && pos % 2 === 1) {
            ans += 0;;
        } else if (i !== d && pos %  2 === 0) {
            ans += 0;
        } else {
            let new_f = f;

            if (f === 0 && i < lmt) {
                new_f = 1;
            }

            let new_sum = sum;
            new_sum *= 10;
            new_sum += i;
            new_sum %= m;

            ans += _f(pos + 1, new_sum, new_f);
            ans %= k;
        }
    }

    dp[pos][sum][f] = ans;
    return dp[pos][sum][f];
}

const operation = (l, r) => {
    init(R);
    let ans = _f(0, 0, 0);
    l = number_minus_one(l);
    init(l);
    ans -= _f(0, 0, 0);

    if (ans < 0) {
        ans += k;
    }

    document.write(ans + "<br />");
}

m = 2;
d = 2;
let q = 1;
let arr = [["20", "32"]];

for (let i = 0; i < q; i++) {
    operation(arr[i][0], arr[i][1]);
}
