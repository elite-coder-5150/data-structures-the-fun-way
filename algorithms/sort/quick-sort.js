import {swap} from "../../util/swap";

const quick_sort = (arr, low, high) => {
    if (low < high) {
        let pi = partition(arr, low, high);

        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
}

const partition = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, j, i);
        }
    }

    swap(arr, i + 1, high);

    return i + 1;
}
