const reverse = (n) => {
    let rev = 0;

    while (n !==  0) {
        rev = (rev * 10) + (n % 10);
        n = Math.floor(n / 10);
    }

    return rev;
}

const getSum = (n) => {
    let sum = 0;

    while (n !== 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum;
}
