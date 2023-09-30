const max = (a, b) => {
    if (a === b) {
        return a;
    } else {
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }
}

 // Returns minimum number of platforms required
const findPlatform = (arr, dep, n) => {
    let plat_needed = 1, result = 1;
    let i = 1, j = 0;

    for (let i = 0; i < n; i++) {
        plat_needed = 1;

        for (let j = i + 1; j < n; j++) {
            if (i !== j) {
                if ((arr[i] >= arr[j] && arr[i] <= dep[j]) || (arr[j] >= arr[i] && arr[j] <= dep[i])) {
                    plat_needed++;
                }
            }
        }

        result = max(result, plat_needed);
    }

    return result;
}

const findPlatform_dp = (arr, dep, n) => {
    // Sort the arrival and departure times in ascending order
    arr.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);

    let plat_needed = 1, result = 1;
    let i = 1, j = 0;

    // Loop through the arrival and departure times
    while (i < n && j < n) {
        // If the next train arrives before the previous train departs, increment plat_needed
        if (arr[i] <= dep[j]) {
            plat_needed++;
            i++;
        } else {
            // If the next train arrives after the previous train departs, decrement plat_needed
            plat_needed--;
            j++;
        }

        // Update the maximum number of platforms needed
        result = Math.max(result, plat_needed);
    }

    return result;
}

/**
 * 1. Define a function called findPlatform that takes in three parameters: arr, dep, and n
 * 2. Initialize plat_needed and result to 1
 * 3. Initialize i and j to 1 and 0 respectively
 * 4. Loop through the array from i = 0 to i < n
 *    a. Set plat_needed to 1
 *    b. Loop through the array from j = i + 1 to j < n
 *        i. If i is not equal to j
 *            1. Check if the arrival time of train i is between the arrival and 
 *              departure time of train j, or if the arrival time of train j is 
 *              between the arrival and departure time of train i
 *           2. If the above condition is true, increment plat_needed by 1
 *   c. Set result to the maximum of result and plat_needed
 *  5. Return result
 */