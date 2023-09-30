class Node {
    constructor(key) {
        this.child = [];
        this.key = key;
    }
}

const new_node = (value) => {
     return new Node(value);
}

const build_kary_tree = (arr, n, k, h) => {
    if (n <= 0) {
        return null;
    }

    let node = new_node(arr[0]);

    if (node == null) {
        document.write("Memory error");
        return null;
    }

    for (let i = 0; i < k; i++) {
        let idx = k * h + i;
        if (idx < n - 1 && h > 1) {
            idx++;
            node.child.push(build_kary_tree(arr, n, k, h - 1));
        } else {
            node.child.push(null);
        }
    }

    return node;
}

const build_tree = (arr, n, k, In) => {
    let height = Math.ceil(Math.log((n * (k - 1) + 1)) / Math.log(k));
    let idx = 0;
    idx = In;
    return build_kary_tree(arr, n, k, height);
}

const post_order = (root, k) => {
    if (root == null) {
        return;
    }

    for (let i = 0; i < k; i++) {
        post_order(root.child[i], k);
    }

    document.write(root.key + " ");
}

const idx = 0;
let k = 3, n = 10;
let preorder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let root = build_tree(preorder, n, k, idx);
document.write('Postorder traversal of constructed full k-ary tree is<br>');
post_order(root, k);
document.write("<br />")
