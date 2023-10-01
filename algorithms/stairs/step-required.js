const stepRequired = (n) => {
    let cnt = 0;

    while (n) {
        n = n & (n - 1);
        cnt++;
    }

    return cnt;
}

// driver code
let n = 23;
document.write(stepRequired(n));