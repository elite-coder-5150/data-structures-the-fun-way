const multiply = (a, b) => {
    let c = new Array(k + 1);

    for (let i = 0; i < k + 1; i++) {
        c[i] = new Array(k + 1);

        for  (let j = 0; j < k + 1; j++) {
            c[i][j] = 0;
        }
    }

     for (let i = 0; i < k + 1; i++) {
         for (let j = 0; j <= k; j++) {
             for (let x = 1; x <= k; x++) {
                    c[i][j] += a[i][x] * b[x][j];
             }
         }
     }

     return c;
}

const pow = (t, n) => {
    if (n === 1) {
        return t;
    }

    if ((n & 1) !== 0) {
        return multiply(t, pow(t, n - 1));
    } else {
        let x = pow(t, n / 2);
        return multiply(x, x);
    }
}

const compute = (n) => {
    if (n === 0) {
        return 1;
    }

    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

     let f = new Array(k + 1);
    f[1] = 1;
    f[2] = 2;
    f[3] = 4;

    let t = new Array(k + 1);

    for (let i = 0; i < k + 1; i++) {
        t[i] = new Array(k + 1);

        for  (let j = 0; j < k + 1; j++) {
            t[i][j] = 0;
        }
    }

    for (let i = 0; i < k + 1; i++) {
        for (let j = 1; j <= k; j++) {
            if (i < k) {
                if (j === i + 1) {
                    t[i][j] = 1;
                } else {
                    t[i][j] = 0;
                }

                continue;
            }

            t[i][j] = 1;
        }
    }

    t = pow(t, n - 1);
    let sum = 0;

    for (let i = 1; i <= k; i++) {
        sum += t[1][i] * f[i];
    }

    return sum;
}

// driver code
let n = 4 ;
document.write(compute(n) + "<br/>");
n = 5;
document.write(compute(n) + "<br/>");
n = 10;
document.write(compute(n) + "<br/>");
