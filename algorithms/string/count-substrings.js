const countSubstrs = (s, _s) => {
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        let c = "";
        let d = s;

        for (let j = i; j < s.length; j++) {
            c += s[j];

            if (d.indexOf(c) != -1) {
                ans++;
            }
        }
    }

    return ans;
}