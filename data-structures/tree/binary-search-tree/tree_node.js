import { Comparator } from '../../../utils/comparator';
import { HashTable } from '../../../utils/hash';

class BinaryTreeNode {
    constructor(value = null) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value;

        this.meta = new HashTable();
        this.nodeCmp = new Comparator();
    }

    get leftHeight() {
        if (!this.left) {
            return 0;
        }

        return this.left.height + 1;
    }

    get rightHeight() {
        if (!this.right) {
            return 0;
        }

        return this.right.height + 1;
    }

    get heigh() {
        return Math.max(this.left.height, this.right.height);
    }

    get balanceFactor() {
        return this.left.height - this.right.height;
    }

    get uncle() {
        if (!this.parent) {
            return undefined;
        }

        if (!this.parent.parent) {
            return undefined;
        }

        if (!this.parent.parent.left || !this.parent.parent.right) {
            return undefined;
        }

        if (this.nodeCmp.equal(this.parent, this.parent.parent.left)) {
            return this.parent.parent.right;
        }

        return this.parent.parent.left;
    }

    setValue(value) {
        this.value = value;
        return this;
    }

    setLeft(node) {
        if (this.left) {
            this.left.parent = null;
        }

        this.left = node;

        if (node) {
            this.left.parent = this;
        }

        return this;
    }

    setRight(node) {
        if (this.right) {
            this.right.parent = null;
        }

        this.right = node;

        if (node) {
            this.rightt.parent = this;
        }

        return this;
    }

    /**
     * 
     * @param {*} nodeToRemove 
     * @returns 
     */
    removeChild(nodeToRemove) {
        if (this.left && this.nodeCmp.equal(this.left, nodeToRemove)) {
            this.left = null;
            return true;
        }

        if (this.right && this.nodeCmp.equal(this.right, nodeToRemove)) {
            this.right = null;
            return true;
        }

        return false;
    }

    replaceChild(nodeToReplace, replaceNode) {
        if (!nodeToReplace || !replaceNode) {
            return false;
        }
        if (this.left && this.nodeCmp.equal(this.left, nodeToReplace)) {
            this.left = replaceNode;
            return true;           
        }

        if (this.right && this.nodeCmp.equal(this.right, nodeToReplace)) {
            this.right = replaceNode;
            return true;
        }

        return false;
    }

    static copyNode(src, target) {
        target.setValue(src.value);
        target.setLeft(src.left);
        target.setRight(src.right);
    }

    inOrder() {
        let traverse = [];

        if (this.left) {
            trraverse = traverse.concat(this.left.inOrder());
        }

        traverse.push(this.value);

        if (this.right) {
            traverse = traverse.concat(this.right.inOrder());
        }

        return traverse;
    }

    toString() {
        return this.inOrder().toString();
    }
}