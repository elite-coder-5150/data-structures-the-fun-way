import { LinkedList } from "../heap/linked-list/linked-list";

export class Queue {
    /**
     * constructor
     */
    constructor() {
        this.linkedList = new LinkedList();
    }

    /**
     * determines whether the queue is empty or not.
     */
    isEmpty() {
        return !this.linkedList.head;
    }

    /**
     * this method looks at the head of the list. then returns the value of the head
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }

        return this.linkedList.head.value;
    }

    /**
     * add an item to the queue.
     * @param {*} value 
     */
    enqueue(value) {
        this.linkedList.append(value);
    }

    /**
     * remove an item from the queue
     * @returns 
     */
    dequeue() {
        const removeHead = this.linkedList.deleteHead();
        return removeHead ? removeHead.value : null;
    }

    /**
     * this method converts the list into a string.
     * 
     * @param {*} cb - the callback function
     * @returns 
     */
    toString(cb) {
        return this.linkedList.toString(cb);
    }
}