const longestSubarray = (arr, n, k) => {
    let pre = Array.from({length: n}, (_, i) => 0);

    for (let i = 0; i < n; i++) {
        if (arr[i] > k) {
            pre[i] = 1
        } else {
            pre[i] = -1;
        }
    }

    for (i = 1; i < n; i++) {
        pre[i] = pre[i - 1] + pre[i];
    }

    let len = 0;
    let lo = 1; hi = n;

    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        let ok = false;

        for (i = mid - 1; i < n; i++) {
            let x = pre[i];

            if (i - mid >= 0) {
                x -= pre[i - mid];
            }

            if (x > 0) {
                ok = true;
                break;
            }
        }

        if (ok == true) {
            len = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return len;
}