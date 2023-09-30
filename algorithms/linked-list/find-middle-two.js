let head = null;

class Node {
    constructor(next, val) {
        this.data = val;
        this.next = next;
    }
}

const printMiddle = (head) => {
    let count = 0;
    let mid = head;

    while (head != null) {
        if ((count % 2) == 1) {
            mid = mid.next;
        }

        count++;
        head = head.next;
    }

    if (mid != null) {
        console.log("The middle element is [" + mid.data + "]\n");
    }
}

const push = (head_ref, new_data) => {
     let new_node = new Node(head_ref, new_data);;
     head = new_node;
     return head;
}

const printList = (head) => {
    while (head != null) {
        document.write(head.data + "-> ");
        head = head.next;
    }

    document.write("null <br />");
}

for (i =  5; i > 0; i--) {
    head = push(head, i);
    printList(head);
    printMiddle(head);
}