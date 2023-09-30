import LinkedList from '../linked-list/linked-list';

export class stack {
    /**
     * create an instance of the LinkedList
     */
    constructor() {
        this.linkedList = new LinkedList();
    }

    /**
     * checkes whether the stack contains any values.
     */
    isEmpty() {
        return !this.linkedList.head;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.linkedList.head.value;
    }

    /**
     * add an element to the stack
     * @param {*} value 
     */
    push(value) {
        this.linkedList.push(value);
    }

    /**
     * remove an element from the stack
     * @returns 
     */
    pop() {
        const removedHead = this.linkedList.deleteHead();
        return removedHead ? removedHead.value : null;
    }

    /**
     * convert the stack into an array.
     * @returns 
     */
    toArray() {
        return this.linkedList.toArray().map((linkedList) => linkedList.value);
    }

    /**
     * convert the stack into a string.
     * @param {*} cb 
     * @returns 
     */
    toString(cb) {
        return this.linkedList.toString(cb);
    }
}