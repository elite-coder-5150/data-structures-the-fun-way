const insertionSort = (arr, left, right) => {
    for (let i = left; i  <= right; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= left && arr[i] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}

const merge = (left, right) => {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i), right.slice(j));
}

const timSort = (arr) => {
    const minRun = 32;
    const n = arr.length;

    for (let i = 0; i < n; i += minRun) {
        insertionSort(arr, i, Math.min(i + minRun - 1, n - 1));
    }

    let size = minRun;

    while (size < n) {
        for (let start = 0; start < n; start  += 2 * size) {
            let middle = Math.min(start + 2 * size - 1, n - 1);
            let end = Math.min(start + 2 * size - 1, n - 1);

            if (middle < end) {
                arr = merge(arr.slice(start, middle + 1), arr.slice(middle + 1, end + 1));
            }
        }

        size *= 2;
    }

    return arr;
}

let sorted = timSort([3, 6, 5, 7, 5, 8]);

console.log(sorted);
