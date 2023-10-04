const product_divible = (n, k) => {
    let product = 1, pos = 1;

    while (n > 0) {
        if (pos % 2 == 0) {
            product *= n % 10;
        }

        n = parseInt(n / 10);
    }

    if (product % k == 0) {
        return true;
    }

    return false;
}

// driver code
let n = 321922;
let k = 3;

if (product_divible(n, k)) {
    console.log("yes");
} else {
    console.log("no");
}