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

console.log(binary_search_alt(4, [1, 2, 3, 4, 5]));

export const binary_search_original = (arr, left, right, x) => {
   while (left < right) {
      let m = left  + (right - left) / 2;

      if (arr[k] === x) {
         return m;
      }

      if (arr[k] < x) {
         left = m - 1;
      } else {
         right = m + 1;
      }
   }

   //? the target value was not found in the array.
   return -1; 
}