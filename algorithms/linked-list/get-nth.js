/**
 * 8
 * @param {*} index 
 * @returns 
 */
const get_nth = (index) => {
    let curr = head;
    let count = 0;

    while (curr != null) {
        if (count == index) {
            return curr.data;
        }

        count++;
        curr = curr.next;
    }

    assert(false);
    return 0;
}