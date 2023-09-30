const findPairs = (arr, n) => {
    for (let i = 0; i < n; i++) {
        arr[i] = Math.abs(arr[i]);
    }

    arr.sort((a, b) => a - b);

    let left = 0;
    let ans = 0;

    for (let right = 0; right < n; right++) {
        while (2 * arr[left] < arr[right]) {
            left++;
        }

        ans += (right - left);
    }

    document.write(ans);
}