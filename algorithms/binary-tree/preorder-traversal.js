class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class INT {
    constructor(a) {
        this.a = a;
    }
}

const newNode = (data) => {
    let temp = new Node();
    temp.data = data;
    temp.left = temp.right = null;

    return temp;
}

const printInorder = (node) => {
    if (node == null) {
        return;
    }

    printInorder(node.left);
    document.write(node.data + " ");
    printInorder(node.right);
}

const conBinaryTreeUtil = (pre, preM, preIdx, l, h, size) => {
    if (preIdx >= size || l > h) {
        return null;
    }

    let root = newNode(pre[preIdx]);
    preIdx = preIdx + 1;

    if (l == h) {
        return root;
    }

    let i;
    for (i = l; i <= h; ++i) {
        if (preM[i] == pre[preIdx]) {
            break;
        }
    }

    if (i <= h) {
        root.left = conBinaryTreeUtil(pre, preM, preIdx, i, h, size);
        root.right = conBinaryTreeUtil(pre, preM, preIdx, i + 1, h, size);
    }

    return root;
}

const convertBinaryTree = (root, pre, preMirror, size) => {
    let preIdex = new INT(0);
    let preMIdx = 0;

    root = conBinaryTreeUtils(pre, preMirror, preIdx, 0, size - 1, size);
    printInorder(root);
}

let preOrder = [1, 2, 4, 5, 3, 6, 7];
let preOrderMirror = [1, 3, 7, 6, 2, 5, 4];
let size = preOrder.length;
let root = new Node();

convertBinaryTree(root, preOrder, preOrderMirror, size);