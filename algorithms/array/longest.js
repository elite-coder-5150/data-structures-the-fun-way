const longest = (arr, n, k) => {
    let freq = new Array(7).fill(0);
    let start = 0, end = 0, now = 0, l = 0;

    for (let i = 0; i < n; i++) {
        freq[a[i]]++;

        if (freq[a[i]] === 1) {
            now++;
        }

        while (now > k) {
            freq[a[start]]--;

            if (freq[a[start]] === 0) {
                now--;
            }

            l++;
        }

        if (i - l + 1 > end - start + 1) {
            start = l;
            end = i;
        }
    }

    for (let i = start; i <= end; i++) {
        document.write(a[i] + " ");
    }
}


// driver code
let a = [4, 5, 7, 1, 2, 9, 8, 4, 3, 1];
let n  = a.length;

longest(arr, n, k);
