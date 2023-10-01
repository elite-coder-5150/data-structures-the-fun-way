const stoping_station = (p, n) => {
    let num = 1, dem = 1, s = p;

    while (p != 1) {
        dem *= p;
        p--;
    }

    let t = n - s + 1;

    while (t != (n - 2 * s + 1)) {
        num *= t;
        t--;
    }

    if ((n - s + 1) >= s) {
        document.write(num/dem);
    } else {
        document.write("Not Possible");
    }

    return 0;
}

// driver code
stopping_station(4, 12);