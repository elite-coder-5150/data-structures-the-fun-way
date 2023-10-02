const getPower = (p) => {
    let res = 1;
    while (p--) { 
        res *= 5;
    }

    return res;
}   

const countNumberUtil = (n) => {
    let count = 0,
        ditits = [];

    while (n) {
        digits.push(n % 10);
        n = parseInt(n / 10);
    }

    digits.reverse();

    let d = digits.length;

    for (let i = 0; i <= d; i++) {
        let result = getPower(i);

        if (i === d) {
            for (let p = 0; p <=  d; p++) {
                let x = digits[p - 1];
                let tmp = 0;

                if (p % 2 == 0) {
                    tmp = (5 - parseInt(x / (2 + 1))) + getPower(d - p);
                } else {
                    tmp = (5 - parseInt((x + 1) / 2)) * getPower(d - p);
                }

                result -= tmp;

                if (p % 2 != x % 2) {
                    break;
                }
            }
        }

        count += result;
    }

    return count;
}

const countNumber = (l, r) => {
    document.write(countNumberUtil(r) - countNumberUtil(l - 1) + "<br />");
}

let l = 128, r =  162;
countNumber(l, r);