const totalPossibleJumps = (n) => {
    if ((n - 1) == 0) {
        let newVec = [];
        newVec.push("");

        return newVec;
    } else {
        if (n < 0) {
            let newsVec = [];
            return newVec;
        }
    }

    let j =  totalPossibleJumps(n - 1);
    let _j = totalPossibleJumps(n - 2);

    let totalJumps = [];

    for (let s in j) {
        totalJumps.push("1" + j[s]);
    }

    for (let s in _j) {
        totalJumps.push("2" + _j[s]);
    }

    return totalJumps;
}

// driver code
let n = 3;
let ans = totalPossibleJumps(n);

for (let it in ans) {
    document.write(`${ans[it]}<br />`);
}