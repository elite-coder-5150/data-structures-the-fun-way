const findDepthRec = (tree, n, idx) => {
    if (idx >= n || tree[idx] == '1') {
        return 0;
    }
    idx++;
    let left = findDepthRec(tree, n, idx);

    return Math.max(left, right) + 1;
}

const findDepth = (tree, n) => {
    let idx = 0;
    return findDepthRec(tree, n, idx);
}

let tree = 'nlnnlll'.split('');
let n = tree.length;
document.write(findDepth(tree, n));