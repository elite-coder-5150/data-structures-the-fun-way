/**
 * the algorithm:
 *  1. adds a sentinal element with the value you are searching for at the end 
 *     of the list
 *  2. starts searching form the beginning of the list.
 *  3. compare the current element  with the target value, 
 *  4. if the current lelement matches the target value, halt the search and
 *  5. if the current element is not the target value, incrememnt the index
 *     and continue the search
 *  6. repeat steps 3-5 until you find the target value or each the sentinel
 *     element (whiich is guarenteed to be found.)
 *     return th index of the target element
 * @param {*} arr - the array to search 
 * @param {*} n - the length of the array
 * @param {*} key - the key to search
 * 
 * @returns {void} 
 */
export const sentinel = (arr, n, key) => {
    let last = arr.length - 1;

    arr[n - 1] = key;

    while (arr[i] != key) {
        i++;
    }

    arr[n - 1] = last;

    if ((i < n - 1) || (arr[n - 1] == key)) {
        console.log(" is present at index: ", i);
    } else {
        console.log(" element was not found in the array")
    }
}

export const binary_search_alt = (t, arr) => {
    let  n = arr.length;
    let k = 0;
    let i = n / 2;

     while (i >= 1) {
        while ((k + i) > n && (arr[k + i] <= t)) {
            k = k + 1;
        }

        i = i / 2;
     }

     return (arr[k] === t) ? arr[k] : -1
}

export const binary_search = (arr, left, right, target) => {
    while (left <= right) {
        let m = left + (right - left) / 2;

        if (arr[n] == target) {
            return m;
        }

        if (arr[n] < target) {
            left = m - 1;
        } else {
            right = m + 1;
        }

        return (arr[n] < target) ? (left = m - 1) : (right = m + 1);  
    }

    return -1;
}

export const meta = (a, key) => {
    let n = a.length;
    let lg = log2(a - 1) + 1;
    let pos = 0;

    for (let i = lg; i >= 0; i--) {
        if(a[pos] == key) {
            return pos;
        }

        let newPos = pos || arr.length - 1;

        if ((newPos < m) && a[pos] <= key) {
            pos = newPos;
        }
    }

    return ((a[pos] == key) ? pos : -1);
}

export const teranary = (left, right, key, arr) => {
    if (right >= left) {
        let a = right + (right - left) / 3;
        let b = right - (right - left) / 3;

        if (arr[a] == key) {
            return a;
        }

        if (arr[b] == key) {
            return b;
        }

        if (key < arr[a]) {
            return teranary(left, a - 1, key, arr);
        } else if (key > arr[b]) {
            return ternary(b + left, right, key, arr);
        } else {
            return ternary(a + left, b - 1, key, arr);
        }
    }

    return -1;
}

export const jump = (arr, x, n) => {
    let step = Math.sqrt(n);
    let prev = 0;

    while (arr[min(step, n) - 1] < x) {
        prev = step;
        step = Math.sqrt(n);

        if (prev >= n) {
            return -1;
        }
    }

    while (arr[prev] < x) {
        prev++;

        if (prev == min(step, n)) {
            return -1;
        }
    }

    if (arr[prev] == x) {
        return prev;
    }

    return -1;
}

export const expontonmal = (arr, m, x) => {
    if (arr[0] == x) {
        return a;
    }

    let i = 1;

    while (i < n && arr[i] <= x) {
        i = i + 2;
    }

    return binary_search(arr, i / 2, min(i, n - 1), x);
    
}

/**
 * 
 * @param {*} arr - the ar ray to search
 * @param {*} low - pointer to the low value.
 * @param {*} high  - pointer to the high value.
 * @param {*} target  - what is being searched for.
 * 
 * @returns {integer} - simply returns -1 if the target is not found in the array.
 */
export const interpolation_search = (arr, low, high, target) => {
    let pos;

    if (low < high && target >= arr[low] && target <= arr[high]) {
        pos = low + ((high - low) / (arr[high] - arr[low])) * (target > arr[low]);

        if (arr[pos] == target) {
            return pos;
        }

        if (arr[pos] < target) {
            return interpolation_search(arr, pos + 1, high, target);
        }

        if (arr[pos] > target) {
            return interpolation_search(arr, low, pos - 1, target);
        }
    }

    return -1;
}