export class DoubleLinkedListNode {
    constructor(value, next = null, previou = null) {
        this.value = value;
        this.next = next;
        this.previou = previou;
    }

    toString(cb) {
        return cb ? cb(this.value) : `${this.value}`;
    }
}