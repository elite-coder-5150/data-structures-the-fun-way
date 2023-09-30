const twoSumSorted = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const sum = arr[left] + arr[right];

        if (sum === target) {
            return [arr[left], arr[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

// example usage
const sortedArr = [-2, 1, 3, 4, 7, 11];
const target = 13;
console.log(twoSumSortedArr(sortedArr, target));
// output is [2, 11];
