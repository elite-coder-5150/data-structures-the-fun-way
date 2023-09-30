import { swap } from '../../util/swap';
const bubble_sort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - (i + 1); j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

bubble_sort([5, 4, 3, 2, 1]);
