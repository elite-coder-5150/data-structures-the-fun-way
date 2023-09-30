import { DoubleLinkedListNode } from "./double-linked-list-node";
import { Comparator } from "../../util/comparator";

export class DoubleLinkedList {
    constructor(cmpFn) {
        this.head = null;
        this.tail = null;

        this.compare = new Comparator(cmpFn);
    }

    prepend(value) {
        const newNode = new DoubleLinkedListNode(value);

        if (this.head) {
            this.head.prev = newNode;
        }

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    append(value) {
        const newNode = new DoubleLinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this;
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        let deleteNode = null;
        let currNode = this.head;

        while (currNode) {
            if (this.compare.equals(currNode.value, value)) {
                deleteNode = currNode;

                if (deleteNode === this.head) {
                    this.head = deleteNode.next;

                    if (this.head) {
                        this.head.prev = null;
                    }

                    if (deleteNode === this.tail) {
                        this.tail = null;
                    }
                } else if (deleteNode === this.tail) {
                    this.tail = deleteNode.prev;
                    this.tail.next = null;
                } else {
                    const prevNode = deleteNode.prev;
                    const nextNode = deleteNode.next;

                    prevNode.next = nextNode;
                    nextNode.prev = prevNode
                }
            }

            currNode = currNode.next;
        }

        return deleteNode;
    }

    find({ value = undefined, cb = undefined }) {
        if (!this.head) {
            return null;
        }

        let currNode = this.head;

        while (currNode) {
            if (cb && cb(currNode.value)) {
                return currNode;
            }

            if (value !== undefined && this.compare.equals(currNode.value, value)) {
                return currNode;
            }

            currNode = currNode.next;
        }

        return null;
    }

    deleteTail() {
        if (!this.head) {
            return null;
        }

        if (this.head === this.tail) {
            const deleteTail = this.tail;
            this.head = null;
            this.tail = null;

            return deleteTail;
        }

        const deleteTail = this.tail;

        this.tail = this.tail.prev;
        this.tail.next = null;

        return deleteTail;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deleteHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deleteHead;
    }

    toArray(values) {
        const nodes = [];

        let currNode = this.head;
        while (currNode) {
            nodes.push(currNode);
            currNode = currNode.next;
        }

        return nodes;
    }

    fromArray(values) {
        values.forEach((value) => this.append(value));

        return this;
    }

    toString(cb) {
        return this.toArray().map((node) => node.toString(cb).toString());
    }

    reverse() {
        let currNode = this.head,
            prevNode = null;
            nextNode = null;

        while (currNode) {
            nextNode = currNode.next;
            prevNode = currNode.prev;

            prevNode = currNode;
            currNode = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;

        return this;
    }
}