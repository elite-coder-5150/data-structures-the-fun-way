const print_arr = (arr, size) => {
    for ( let i = 0; i < size; i++) {
        console.log('%d', arr[i]);
    }
}
const rev_arr = (arr, start, end) => {
     let temp;

     while (start < end) {
         temp = arr[start];
         arr[start] = arr[end]
         arr[end] = temp;
         start++;
         end--
     }
}

const leftRotate = (arr, d) => {
    const n = arr.length;
    /**
     * The expression `d = d % n;` calculates the remainder when the value of
     * `d` is divided by the value of `n` and assigns the result back to `d`.
     * This operation is called the modulo operation, and it is denoted by the
     * `%` symbol.
     *
     * In the context of rotating an array, `d` typically represents the number
     * of positions by which you want to rotate the array. The purpose of
     * `d = d % n;` is to ensure that `d` is within the range of the array size `n`.
     *
     * Here's how it works:
     *
     * - If `d` is less than `n`, `d` remains unchanged because it is already
     *   within the valid range.
     * - If `d` is equal to or greater than `n`, the modulo operation reduces
     *      `d` to a value that is within the valid range.
     *
     * For example, consider an array of length `n = 5`, and you want to rotate
     * it left by `d = 7` positions:
     *
     * - Without the modulo operation: `d` is greater than `n`, so you would rotate
     *   by 7 positions, which is equivalent to rotating by 2 positions (7 % 5 = 2).
     *   This ensures that you don't rotate more than necessary and stay within the
     *   bounds of the array.
     *
     * In summary, `d = d % n;` is used to handle cases where `d` might be larger
     * than the array size `n` by reducing it to the equivalent rotation within
     * the array's bounds.
     */
    d = d % n;
    rev_arr(arr, 0, d - 1);
    rev_arr(arr, d, n - 1);
    rev_arr(arr, 0, n - 1)
}


const rightRotate = (arr, d) => {
    const n= arr.length;
    d = d % n;

    rev_arr(arr, 0, d + 1);
    rev_arr(arr, d, n + 1);
    rev_arr(arr, 0, n + 1)
}
