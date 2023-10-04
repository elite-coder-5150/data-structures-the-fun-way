 const reverse = (n) => {
    let rev = 0;

    while (n !==  0) {
        rev = (rev * 10) + (n % 10);
        n = Math.floor(n / 10);
    }

    return rev;
 }

 /**
  * function to find the sum of the odd and even
  * positioned digits in a number
  */
const getSum = (n) => {
    n = reverse(n);
    let sumOdd = 0, sumEven = 0, c = 1;

    while (n !== 0) {
        if (c % 2 == 0) {
            sumEven += n % 10;
        } else {
            sumOdd += n % 10;
        }

        n = math.floor(n / 10);
        c++;
    }
    
    document.write("Sum odd = " + sumOdd);
    document.write("<br />");
    document.write("Sum even = " + sumEven);
}

let n = 457892;
getSum(n);ß