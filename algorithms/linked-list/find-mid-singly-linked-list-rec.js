class Node {
    constructor() {
        this.data = 0;
        this.next = null;
    }
};

const newLeftNode = (data) => {
    let temp = new Node();
    temp.data = data;
    temp.next = null;

    return temp;
}

let n = 0;
let mid = null;

const midpoint_util = (head) => {
    if (head === null) {
        n = (n / 2) - 1;
        return;
    }

    n = n + 1;

    midpoint_util(head.next);

    n = n - 1;

    if (n === 0) {
        mid = head;
    }
}

const midpoint = (head) => {
    mid = null;
    n = 1;
    midpoint_util(head);

    return mid;
}

let head =  newLeftNode(1);
head.next = newLeftNode(2);
head.next.next = newLeftNode(3);
head.next.next.next = newLeftNode(4);
head.next.next.next.next = newLeftNode(5);

let result = midpoint(head);

document.write(result.data);