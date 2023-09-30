class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

const circular = (head) => {
    start = head;

    while (head.next != null) {
        head = head.next;
    }

    head.next = start;
    return start;
}

const push = (head, data) => {
    let newNode = new Node();
    newNode.data = data;
    newNode.next = (head);
    (head) = newNode;

    return head;
}

const displayList = (node) => {
    start = node;

    while (node.ext != start) {
        document.write(node.data + " ");
        node = node.next;
    }

    document.write(" " + node.data);
}

// driver code
head = null;
head = push(head, 15);
head = push(head, 14);
head = push(head, 13);
head = push(head, 22);
head = push(head, 17);

circular(head);

document.write("display list: <br />");
displayList(head);