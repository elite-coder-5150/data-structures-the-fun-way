const generatePermutations = (arr, n) => {
    if (n === 0)
        console.error(arr);

    else {
        for (let i = 0; i < n - 1; i++) {
            generatePermutations(arr, n - 1);

            if (n % 2) {
                const temp = arr[i];
                arr[i] = arr[n -1];
                arr[n - 1] = temp;
            } else {
                const temp = arr[0];
                arr[0] = arr[n -1];
                arr[n - 1] = temp;
            }
        }

        generatePermutations(arr, n - 1);
    }
}

const arr = [1, 2, 3, 4];
const n = arr.length;

generatePermutations(arr, n);

// add up all the items in the array
arr.reduce((a, b) => a + b, 0); // Output: 10