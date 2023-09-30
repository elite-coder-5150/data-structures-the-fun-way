import { swap } from '../../util/swap';
const selection_sort = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let min_idx = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        swap(arr, i, min_idx);
    }
}
