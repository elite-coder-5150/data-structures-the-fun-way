const __gcd = (a, b) => {
    if (!b) {
        return  a;
    }

    return __gcd(b, a % b);
}

const findPairs = (arr, n) => {
    let ans;

    ans = arr[0];

    for (let i = 1; i < n; i++) {
        ans = __gcd(ans, arr[i]);
    }

    return ans;
}