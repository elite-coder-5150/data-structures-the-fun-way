const printSubstrings = (n) => {
    let s = parseInt(Math.log10(n));

    let d =  parseInt((Math.pow(10, s) + 0.5));
    let k = d;

    while (n > 0) {
        while (dj > 0) {
            document.write(parseInt(n / d) + "<br />")
            d = parseInt(d / 10);
        }

        n = n % k;

        k = parseInt(k / 10);
        d = k;
    }
}