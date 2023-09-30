const addAfter = (last, data, item) => {
    if (last === null) {
        return null;
    }

    let temp, p;
    p = last.next;

    do {
        if (p.data === item) {
            temp = new Node();
            temp.data = data;
            temp.next = p.next;
            p.next = temp;

            if (p === last) {
                last = temp;
            }

            return last;
        }

        p = p.next;
    } while (p !== last.next);

    console.log(item + " not present in the list.");
    return last;
}