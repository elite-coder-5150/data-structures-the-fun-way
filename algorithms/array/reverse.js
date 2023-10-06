const rotateArr = (arr, k) => {
    const n = arr.length;
    k %= n;
    arr.reverse();

    for (let i = 0; i < k / 2; i++) {
        const temp = arr[i];
        arr[i] = arr[k - i - 1];
        arr[k - i - 1] = temp;
    }

    for (let i = k; i < (n + k) / 2; i++) {
        const temp = arr[i]
        arr[i]  = arr[n + k - i - 1]
        arr[n + k - i - 1] = temp;
    }
}

const arr = [1, 2, 3, 4, 5];
const k = 2;
rotateArr(arr, k);

console.log(arr.join(' '));
