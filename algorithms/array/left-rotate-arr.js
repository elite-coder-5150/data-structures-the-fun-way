const leftRotateArr = (arr, n, k) => {
    let mod = k % n;

    for (let i = 0; i < n; i++) {
        const output = ( (arr[(mod + 1)] % n) ).toString();
        document.write(output);
    }

    document.write("\n");
}

leftRotateArr([], n, k)
