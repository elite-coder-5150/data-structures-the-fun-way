const factorial = (n) => {
    return (n === 1 || n === 0) ? 1 : n * factorial(n - 1);
}

const ways = (n) => {
    if (n < 3) {
        return 0;
    }

    let c = 0;
    let d = n - 3;
    let l = d + 1;
    let s = 0;

    let exp_d = Math.floor(d / 2);

}
