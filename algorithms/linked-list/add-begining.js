const addBegin = (last, data) => {
    if (last === null) {
        return addToEmpty(last, data);
    }

    let temp = new Node();
    temp.data = data;
    temp.next = last.next;
    last.next = temp;

    return last;
}