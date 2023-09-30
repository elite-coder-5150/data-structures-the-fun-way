export const findPairSum = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const curr = arr[left] + arr[right];

        if (curr === target) {
            return [arr[left], arr[right]];
        } else if (curr < target) {
            left++
        } else {
            right--;
        }
    }

    return null;
}