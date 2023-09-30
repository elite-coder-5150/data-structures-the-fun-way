class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
}

class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

/**
 * returns thue if the linked lists a and b are identical, otherwise
 * returns false
 * @param {*} a 
 * @param {*} b 
 */
const areIdentical = (a, b) => {
    while (a != null && b != null) {
        if (a.data != b.data) {
            return false;
        }

        a = a.next;
        b = b.next;
    }

    return (a == null && b == null);
}

const push = (root, new_data) => {
    let newNode = new Node(new_data);
    newNode.next = root;
    root = new_node;
    return root;
}

const l1 = push(l1, 1);
const l2 = push(l2, 2);
const l3 = push(l3, 3);

const l4 = push(l4, 4);
const l5 = push(l5, 5);
const l6 = push(l6, 6);

if (areIdentical(l1, l2) == true) {
    console.log('identical')
} else {
    console.log('do')
}