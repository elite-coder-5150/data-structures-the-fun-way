class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

const convertToCircular = (head) => {
    let current = head;

    while (current.next !== null) {
        current = current.next;
    }

    current.next = head;
}

const printList = (head) => {
    let current = head;

    do {
        console.log(current.data + " ");
        current = current.next;
    } while (current !== head);
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = Node(4);

convertToCircular(head);

console.log("the circular linked list is: ");
printList(head);