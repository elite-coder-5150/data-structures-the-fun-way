class Node {
    constructor(key) {
        this.child = [];
        this.key = key;
    }
}

const traverse_tree = (root, k) => {
    let nodes = [];
    nodes.push(root);

    while (nodes.length !== 0) {
        let curr = nodes.pop();

        if (curr !== null) {
            document.write(curr.key + " ");

            for (let i = curr.children.length - 1; i >= 0; i--) {
                nodes.push(curr.children[i]);
            }
        }
    }
}

traverse_tree(root, k);
