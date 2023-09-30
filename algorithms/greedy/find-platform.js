const max = (a, b) => {
    if (a === b) {
        return a;
    } else {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }
}

 // Returns minimum number of platforms required
const findPlatform = (arr, dep, n) => {
    let plat_needed = 1, result = 1;
    let i = 1, j = 0;

    for (let i = 0; i < n; i++) {
        plat_needed = 1;

        for (let j = i + 1; j < n; j++) {
            if (i !== j) {
                if ((arr[i] >= arr[j] && arr[i] <= dep[j]) || (arr[j] >= arr[i] && arr[j] <= dep[i])) {
                    plat_needed++;
                }
            }
        }

        result = max(result, plat_needed);
    }

    return result;
}
