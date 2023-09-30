import { LinkedListNode } from "./linked-list-node";
import { Comparator } from "../../../util/comparator";

export class LinkedList {
    constructor(cmpFn) {
        this.head = null;
        this.tail = null;

        this.cmpFn = new Comparator(cmpFn);
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    append(value) {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        this.tail.next = newNode;
        this.tail = newNode;

        return this;
    }

    insert(value, idx) {
        const index = idx < 0 ? 0 : idx;

        if (index === 0) {
            this.prepend(value);
        } else {
            let count = 1;
            let currNode = this.head;

            const newNode = new LinkedListNode(value);

            while (currNode.next) {
                if (count === index) {
                    break;
                }

                currNode = currNode.next;
                count += 1;
            }
        

            if (currNode) {
                newNode.next = currNode.next;
                currNode.next = newNode;
            } else {
                if (this.tail) {
                    this.tail.next = newNode;
                    this.tail = newNode;
                } else {
                    this.head = newNode;
                    this.tail = newNode;
                }
            }
        }

        return this;
    }

    
    _delete_(value) {
        if (!this.head) {
            return null;
        }

        let deleteNode = null;

        while (this.head && this.compaare.equal(this.head.value, value)) {
            deleteNode = this.head
            this.head = this.head.next;
        }

        let currNode = this.head;

        if (currNode.value !== value) {
            while (currNode.next) {
                if (this.compare.equal(currNode.next.value, value)) {
                    deleteNode = currNode.next;
                    currNode.next = currNode.next.next;
                } else {
                    currNode = currNode.next;
                }
            }
        }

        if (this.compare.equal(this.tail.value, value)) {
            this.tail = currNode;
        }

        return deleteNode;
    } 

    delete(tree, node) {
        let child = new LinkedListNode();
        let successor = new LinkedListNode();

        if (tree.root == null || node === null) {
            return;
        }

        if (node.left == null && node.right == null) {
            if (node.parent == null) {
                tree.root = null;
            } else if (node.parent.left == node) {
                node.parent.left = null;
            } else {
                node.parent.right = null;
            }

            // in c
            // pNode->parent->left == node

            return;
        }

        if (node.left == null || node.right == null) {
            child = node.left;

            if (node.left == null) {
                chiild = node.right;
            }

            child.parent = node.parent;

            if (node.parent == null) {
                tree.root = child;
            } else if (node.parent.left == node) {
                node.parent.left = child
            } else {
                node.parent.right = child;
            }

            return;
        }

        successor = node.right;

        while (successor.left != null) {
            successor = successor.left;
        }

        delete(tree, successor);

        if (node.parent == null) {
            tree.root = successor;
        } else if (node.parent.left == null) {
            node.parent.left = successor;
        } else {
            node.parent.right = successor;
        }

        successor.parent = node.left;
        node.left.parent = successor;

        successor.right = node.right;

        if (node.right != null) {
            node.right.parent = successor
        }
    }

    find({value = undefined, cb = undefined}) {
        if (!this.head) {
            return null;
        }

        let currNode = this.head;

        while (currNode) {
            if (cb && cb(currNode.value)) {
                return currNode;
            }

            if (value !== undefined && this.comapre.equal(currNode.value, value)) {
                return currNode;
            }

            currNode = currNode.next;
        }

        return null;
    }

    deleteTail() {
        const deleteTail = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;

            return deleteTail;
        }

        let currNode = this.head;

        while (currNode.next) {
            if (!currNode.next.next) {
                currNode.next = null;
            } else {
                currNode = currNode.next;
            }
        }

        this.tail = currNode;
        return deleteTail;
    }

    deleteHead() {
        if (!this.head) {
            return null;
        }

        const deleteHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deleteHead;
    }

    fromArray(values) {
        values.forEach((value) => this.append(value));
        return this;
    }

    toArray() {
        const nodes = [];

        let currNode = this.head;

        while (currNode) {
            nodes.push(currNode);
            currNode = currNode.next;
        }

        return nodes;
    }

    toString(cb) {
        return this.toArray().map((node) => node.toString(cb)).toString();
    }

    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }

        this.tail = this.head;
        this.head = this.prevNode;

        return this;
    }
}

let list = new LinkedList();

list.delete(tree, find(tree, target))