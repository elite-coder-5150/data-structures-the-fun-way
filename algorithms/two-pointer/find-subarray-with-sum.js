/**
 * 
 * @param {*} arr - the array to search 
 * @param {*} target - the element searching for
 */
export const findSubarrayWithSum = ( arr, target ) => {
    let left = right = 0;
    let current = arr[0];

    while (right < arr.length) {
        if (curr === target) {
            return arr.slice(left, right + 1);
        } else if (curr < target) {
            right++;
            curr += arr[right];
        } else {
            curr -= arr[left];
            left++;
        }
    }
    return null;
}