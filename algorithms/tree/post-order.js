class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let root = null;

const post_order = (head) => {
    let temp = root;
    let visited = new Set();

    while ((temp != null && !visited.has(temp))) {
        if (temp.left != null && !visited.has(temp.left)) {
            temp = temp.left;
        } else if (temp.right != null && !visited.has(temp.right)) {
            temp = temp.right;
        } else {
            document.write(temp.data + " ");
            visited.add(temp);
            temp = head;
        }
    }
}
