const product_sum_divisible = (n, size) => {
    let sum = 0, prod = 1;

    while (n > 0) {
        if (size % 2 === 0) {
            prod *= n % 10;
        } else {
            sum += n % 10;
        }

        n = Math.floor(n / 10);
        size--;
    }

    return prod % sum === 0;


}

// driver code
let n =  1234;
let len = 4;

if (product_sum_divisible(n, len)) {
    document.write('true')
} else {
    document.write("false") ;
}

//-----------------------------------------------------------------------------

const psd = (n) => {
    let sum = 0,
        product = 1;

    let num = n.toString();

    for (let i = 0; i < num.length; i++) {
         if (i % 2 !== 0) {
             product = product * Number(num[i]);
         } else {
             sum += Number(num[i])
         }
    }
     return (product % sum === 0);
}


let _n = 1234;
if (psd(_n)) {
    document.write('true')
} else {
    document.write('false');
}


 const _psd = (n) => {
     const numStr = n.toString();
     let sum = 0;
     let product = 1;

     for (let i = 0; i < numStr.length; i++) {
         const digit = Number(numStr[i]);

         if ( i % 2 === 0) {
             sum += digit;
         } else {
             product += digit;
         }
     }

     return product % sum === 0;
  }

const _n_ = 1234
if (_psd(_n_)) {
    console.log('true')
} else{
     console.log('false')
}
