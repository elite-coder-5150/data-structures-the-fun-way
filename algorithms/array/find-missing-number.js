import { swap } from '../../util/swap';
const findMissing = (arr, n) => {
    let i;
    let temp = [];

    for (i = 0; i < n; i++) {
        temp[arr[i]- 1] = 1;
    }

    let ans = 0;

    for (i = 0; i <= n; i++) {
        if (temp[i] === 0) {
            ans = i + 1;
            break;
        }
    }

    console.log(ans);
}

let arr = [1, 3, 7, 5, 6, 2];
let n = arr.length;
findMissing(arr, n);

// q: what is the missing number?
// a: 4

const find_missing_number = (a, n) => {
    let total = Math.floor((n + 1) * (n + 2) / 2);

    for (let i = 0; i < n; i++) {
        total -= a[i];
    }

    return total;
}
const get_missing_number_ = (a, n) => {
    let i, total = 1;
    for (i = 2; i < (n + 1); i++) {
        total += i;
        total -= a[i - 2];
    }

    return total;
}
const gmn = (a, n) => {
    let x = a[0];
    let _x = 1;

    for (let i = 1; i < n; i++) {
        x ^= a[i];
    }

    for (let i = 2; i <= n + 1; i++)    {
        _x ^= i;
    }

    return (x ^ _x);
}

const _gmn = (a, n) => {
    let i = 0;

    while (i < n) {
        let c_pos = a[i] - 1;

        if (a[i] < n && arr[i] !== a[c_pos]) {
            swap(arr, i , c_pos);
        } else {
            i++;
        }
    }

    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] !== idx + 1) {
            return idx + 1;
        }
    }

    return n; // return the missing number
}

const __gmn = (a, n) => {
    for (let i = 0; i < n; i++) {
        if (Math.abs(arr[i]) - 1 === n) {
            continue;
        }
        let idx = Math.abs(arr[i]) - 1;
        arr[idx] *= -1;
    }

    let ans = n + 1;

    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            ans = i + 1;
        }
    }

    console.log(ans);
}

