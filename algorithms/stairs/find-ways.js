const findWays = (n) => {
    let sum = 0;

    for (let i =  1; i < n; i++) {
        let curr = sum + 1;
        sum += curr;
    }

    return sum + 1;
}

// driver code
let n = 10;
document.write(findWays(n) + "<br/>");
