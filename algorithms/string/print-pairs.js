const num_of_pairs = (n) => {
     let i = 1;

     while ((i * i * i) + (2 * i * i) + 1 <= n) {
        i++;
     }

     return (i - 1);
}

const prin_pairs = (pairs) => {
    let i = 1, mul;

    for (i = 1; i <= pairs.length; i++) {
        mul = pairs[i - 1] * pairs[i - 1] * pairs[i - 1] + 2 * pairs[i - 1] * pairs[i - 1] + 1;
        document.write(pairs[i - 1] + " " + mul + "<br />");
    }
}

let n =  500, pairs, mul, i = 1;
pairts = num_of_pairs(n);

document.write("Number of pairs = " + pairs + "<br />")
print_pairs(pairs);