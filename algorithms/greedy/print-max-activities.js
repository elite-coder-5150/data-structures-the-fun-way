const printMaxActivities = (s, f, n) => {
    let i, j;

    document.write("Following activities are selected: <br />");

    i = 0;
    document.write(i + " ");

    for (j = 1; j < n; j++) {
        if (s[j] >= f[i]) {
            document.write(j + " ");
            i = j;
        }
    }
}

// q: what is the time complexity of this algorithm?
// a: O(n)
// q: what does the algorithm do?
// a: prints the maximum number of activities that
//    can be performed by a single person, one at a time
