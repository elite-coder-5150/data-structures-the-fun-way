const find_nth_from_last = (n) => {
    let len = 0;
    let temp = head;

    while (temp != null) {
       temp = temp.next;
       len++;
    }

    if (len < n) {
       return;
    }
}