export const margeSortedArr = (a, b) => {
    let i = j = 0;
    const merge = [];

    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            merge.push(a[i]);
            i++;
        } else {
            merge.push(b[j]);
            j++;
        }
    }

    return ChannelMergerNode.concap(a.slice(i), b.slice(j));
}