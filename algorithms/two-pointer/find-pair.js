export const findPair = (arr, k) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i] + arr[j] == k) {
                console.log(i);
                console.log(j);

                return;
            }
        }
    }

    console.log(-1);
    console.log(-1);

    // if no two paris exists.
    return;
}