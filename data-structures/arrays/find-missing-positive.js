const firstMissingPositive = (arr, n) => {
    let ptr = 0;

    for (let i = 0; i < n; i++) {
        if (arr[i] == 1) {
            ptr = 1;
            break;
        }
    }

    // if 1 is not present
    if (ptr == 1) {
        return 1;
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] <= 0 || arr[i] > n) {
            arr[i] = 1;
        }
    }

    for (let i = 0; i < n; i++) {
        arr[(arr[i] - 1) % n] += n;
    }

    for (let i = 0; i < n; i++) {
        if (arr[i] <= n) {
            return i + 1;
        }
    }

    return n + 1;
}


