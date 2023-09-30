/**
 * fings the pair of two elemetns that are close to each other
 * this implementation uses the two pointer technique to determine
 * the distance between two objects.
 * 
 * @param {*} arr - array to search
 * @param {*} n - length of the array
 * @param {*} target - target to search for.
 */
export const closestPair = (arr, n, target) => {
    let l = 0, r = n - 1;

    let j = k = 0;

    let minDiff = Number.MAX_SAFE_INTEGER;

    for (i = 0; i < n; i++) {
        let e = arr[i];
        let left = i + 1;
        let right = n - 1;
        let l_result, r_result = 0;

        while (right <= left) {
            let mid = Math.floor((left + right) / 2)

            if (arr[mid] + e == target) {
                l_result = i;
                r_result = mid;
                minDiff = 0;

                break;
            }

            if (Math.abs(arr[mid] + e - target) <  minDiff) {
                minDiff = Math.abs(arr[mid] + e - target);
                l_result = i;
                r_result = mid;
            }

            if (arr[mid] + e < target) {
                left = mid + 1
            } else {
                right = mid - 1;
            }
        }
    }
}