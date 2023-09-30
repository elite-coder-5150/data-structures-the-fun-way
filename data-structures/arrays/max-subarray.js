export const bf_max_subarray = (arr) => {
    let max = 0;

    if (arr.length === 0) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        _sum = 0

        for (let j = 0; j < arr.length; j++) {
            _sum += arr[j];
            max = max(max, _sum);
        }
    }

    return max;
}

export const kadane = (arr) => {
    max = max_arr = arr[0];

    for (let i = 0; i < arr.length; i++) {
        max_arr = max(arr[i], max_arr + arr[i]);
        max = max(max_arr, max);
    }
}