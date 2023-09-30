class Node {
    constructor(key) {
        this.key = key;
        this.left = this.right = this.parent = null;
    }
}

let root = null;

const insert = (node, key) => {
    if (node == null) {
        return new Node(key);
    }

    if (key < node.key) {
        node.left = insert(node.left, key);
        node.left.parent = node;
    } else if (key > node.key) {
        node.right = insert(node.right, key);
        node.right.parent = node;
    }

    return node;
}

const inorder = (root) => {
    let leftDone = false;

    while (root != null) {
        if (!leftDone) {
            while (root.left != null) {
                root = root.left;
            }
        }

        document.write(root.key + " ");

        leftDone = true;

        if (root.right != null) {
            leftDone = false;
            root = root.right;
        } else if (root.parent != null) {
            while (root.parent != null && root == root.parent.right) {
                root = root.parent;
            }

            if (root.parent == null) {
                break;
            }

            root = root.parent;
        } else {
            break;
        }
    }
}
