const findMissing = (arr, n) => {
    let i;
    let temp = [];

    for (i = 0; i < n; i++) {
        temp[arr[i]- 1] = 1;
    }

    let ans = 0;

    for (i = 0; i <= n; i++) {
        if (temp[i] == 0) {
            ans = i + 1;
            break;
        }
    }

    console.log(ans);
}

let arr = [1, 3, 7, 5, 6, 2];
let n = arr.length;
findMissingArray(arr, n);

// q: what is the missing number?
// a: 4

const find_missing_number = (a, n) => {
     let total = Math.floor((n + 1) * (n + 2) / 2);

     for (let i = 0; i < n; i++) {
         total -= a[i];
     }

     return total;
}
