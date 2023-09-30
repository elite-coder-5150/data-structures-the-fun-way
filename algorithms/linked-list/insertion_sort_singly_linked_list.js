let head = null;
let sorted = null;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

const push = (val) => {
    let newNode = new Node(val);
    newNode.next = head;
    head = newNode;
}

const insertionSort = (heaf_ref) => {
    let sorted = null;
    let curr = head_ref;

    while (curr != null) {
        let next = curr.next;
        sortedInsert(curr);
        curr = next;
    }

    head = sorted;
}

const sortedInsert = (heaf_ref) => {
    if (sorted == null || sorted.data >= head_ref.data) {
        head_ref.next = sorted;
        sorted = head_ref;
    } else {
        let current = sorted;

        while (current.next != null && current.next.data < head_ref.data) {
            current = current.next;
        }

        head_ref.next = current.next;
        current.next = head_ref;
    }
}

const printList = (head) => {
    while (head != null) {
        document.write(head.data + " ");
        head = head.next;
    }
}

// driver code
push(5);
push(20);
push(4);
push(3);
push(30);

document.write("linked list before sorting <br />");
printList(head);
insertionSort(head);
document.write("<br /> linked list after sorting <br />");
printList(sorted);