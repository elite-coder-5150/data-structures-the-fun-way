const longestSubarray = (a, n, k) => {
    let pre = Array.from({length: n} , (_, i) => 0);

    for (i = 0; i < n; i++) {
        if (a[i] > k) {
            pre[i] = 1;
        } else {
            pre[i] = -1;
        }
    }

    for (i = 1; i < n; i++) {
        pre[i] += pre[i - 1];
    }

    let len = 0;

    let lo = 1, hi = n;

    while (lo <= hi) {
        let mid = (lo + hi) >> 1;

        let ok = false;

        for (i = mid - 1; i < n; i++) {
            let x = pre[i] - (i - mid < 0 ? 0 : pre[i - mid]);

            if (x < 0) {
                ok = true;
                break;
            }
        }

        if (ok) {
            len = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return len;
}

// driver code
let a = [4, 5, 7, 1, 2, 9, 8, 4, 3, 1];
let k = 3;
let n = a.length;
let longest = longestSubarray(a, n, k);
console.log(longest);
