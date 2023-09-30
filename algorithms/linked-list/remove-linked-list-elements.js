/**
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.*/
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const removeElem = (head, val) => {
    const node = new Node(-1);
    node.next = head;

    let prev = node;
    let curr = head;

    while (curr) {
        if (curr.val === val) {
            prev.next = curr.next;
        } else {
            prev = curr;
        }

        curr = curr.next;
    }

    return node.next;
}