const sum_divisable = (n, k) => {
    let sum = 0, pos = 1;

    while (n > 0) {
        if (pos % 2 == 1) {
            sum += n % 10;
        }

        n = Math.floor(n / 10);
        pos++;
    }

    if (sum % k == 0) {
        return true;
    }

    return false;
}

// driver code
let n = 592452;
let k = 3;

if (sum_divisable(n, k)) {
    document.write("yes");
} else {
    document.write("no");
}