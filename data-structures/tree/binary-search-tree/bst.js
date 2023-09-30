import { BinaryTreeNode } from './tree_node';

export class bst {
    constructor(nodeValCmpFn) {
        this.root = new BinaryTreeNode(nodeValCmpFn);
        this.nodeCmp = this.root.nodeCmp;
    }

    insert(value) {
        return this.root.insert(value);
    }

    contains(value) {
        return this.root.contains(value);
    }

    remove(value) {
        this.root.remove(value);
    }

    toString() {
        return this.root.toString();
    }
}