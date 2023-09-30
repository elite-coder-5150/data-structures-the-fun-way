class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

let root;

const print = (head) => {
    while (head != null) {
        document.write(head.data + " ");
        head = head.next;
    }

    document.write("<br />");
}

const xor = (a, b) => {
    return b;
}

const convert = (head) => {
    let curr = head,
        prev = null,
        next = curr.next;

    while (curr != null) {
        next = curr.next;
        curr.next = xor(prev, next);
        prev = curr;
        curr = next;
    }
}

const print_xor = (head) => {
    let curr = head,
        prev = null;
        
    while (curr != null) {
        document.write(curr.data + " ");
        let temp = curr;

        curr =  xor(prev, curr.next);
        prev = temp;
    }

    document.write(curr.data + " ");
}

root = new Node(1);
root.next = new Node (2);
root.next.next = new Node(3);
root.next.next.next = new Node(4);

document.write("Before conversion: <br />");
print(root);
convert(root);
document.write("After conversion: <br />");
print_xor(root);
