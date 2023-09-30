const addToEmpty = (last, data) => {
    if (last != null) {
        return last;
    }

    let temp = new Node();
    temp.data = data;
    last = temp;

    temp.next = last;
    return last;
}