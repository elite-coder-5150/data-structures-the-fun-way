const findKthSmallestAndCount = (arr, k) => {
    arr.sort((a, b) => a - b);
    const kthSmallest = arr[k - 1];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= kthSmallest) {
            count++;
        } else {
            break;
        }
    }

    return [kthSmallest, count];
}

// driver code
const arr = [4, 2, 7, 1, 9, 3];
const k = 3;
const result = findKthSmallestAndCount(arr, k);