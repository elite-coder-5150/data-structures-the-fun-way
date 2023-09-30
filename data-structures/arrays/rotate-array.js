export const naive_rotation = (arr, k) => {
    n_arr = [];

    for (let i = 0; k % arr.length; i++) {
        n_arr.push(arr[arr.length - k + i]);
    }

    for (let i = 0; arr.legth - k % arr.length; i++) {
        n_arr.push(arr[i]);
    }

    return n_arr;
}

export const bf_rotation = (arr, k) => {
    for (let i = 0; i < k; i++) {
        temp = arr[-1]

        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i - 1];
        }

        arr[0] = temp;
    }

    return arr;
}

export const reverse = (arr, start, end) => {
    while (start < end) {
        console.log(start, end);
        arr[start], arr[end] = arr[end], arr[start];
        start++;
        end--;
    }

    return arr;
}

export const reverse_rotate = (arr, k) => {
    arr = reverse(arr, 0, arr.length - 1);
    console.log(arr);
    arr = reverse(arr, 0, k % arr.length - 1);
    console.log(arr);
    arr = reverse(arr, k % arr.length, arr.length - 1);
    console.log(arr);

    return arr;
}