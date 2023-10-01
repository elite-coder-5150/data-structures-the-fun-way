const printPattern = (s, n) => {
    document.write(s.join('') + "<br />");

    let i = 0, j = n - 1;

    while (i < j) {
        let c = s[i];
        s[i] = s[j];
        s[j] = c;
        i++;
        j--;
    }

    i = 0;
    j = n - 1;

    while (j - i > 1) {
        s[i] = s[j] = '*';
        document.write(s.join('') + "<br />");
        i++;
        j--;
    }
}

const s = "geeks".spalit('');
let n = s.length;

printPattern(s, n);