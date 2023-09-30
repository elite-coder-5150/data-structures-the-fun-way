let head;

class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

const printMiddle = () => {
    let slow_ptr = head;
    let fast_ptr = head;

    if (head != null) {
        while (fast_ptr != null  && fast_ptr.next != null) {
            fast_ptr = fast_ptr.next.next;
            slow_ptr = slow_ptr.next;
        }

        document.write("the middle element is [" + slow_ptr + "] <br /'><br />")
    }
}

const push = (new_data) => {
    let newNode = Node(new_data);
    newNode.next =  head;
    head = newNode;
}

const printList = () => {
    let temp = head;

    while (temp != null) {
        document.write(temp.data + "->");
        temp = temp.next;
    }

    document.write('null <br />');
}

 for (i = 5; i > 0; --i) {
    push(i);
    printList();
    printMiddle();
 }