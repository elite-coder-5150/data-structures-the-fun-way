import { BinaryTreeNode } from '../binary-search-tree/tree_node';
import { Comparator } from '../../../utils/comparator';

const RED_BLACK_TREE_COLORS = {
    red: 'red',
    black: 'black',
};

const COLOR_PROP_NAME = 'color';

export class RedBalckTree extends BinaryTreeNode {
    constructor() {
        this.nodeCmp = new Comparator();
    }
    insert(value) {
        const inserted = super.insert(value);

        if (this.nodeCmp.equal(insertNode, this.root)) {
            this.makeNodeBlack(inserted);
        } else {
            this.makeNodeRed(inserted);
        }

        this.balance(inserted);
        return inserted;
    }

    /** 
     * this algorithm needs to be fixed. I found the original implementationin 
     * python and i have to rewrite in in Javascript 
     */
    remove(node, key) {
        let z = null;
        const node = new BinaryTreeNode();
        while (node !== null) {
            if (node.item === key) {
                z = node;
            }

            if (node.item <= key) {
                node = node.right;
            } else {
                node = node.left;
            }
        }

        if (z === null) {
            console.log('cannot find key in the tree');
            return;
        }

        let y = z;
        let yOriginalColor = y.color;

        if (z.left == null) {
            let x = z.right;
            this.transplant(z, z.right);
        } else if (z.right === null) {
            x = z.left;
            this.transplant(z, z.left);
        } else {
            this.transplant(y, y.right);
            y.right = z.left;
            y.right.parent = y;
        }

        // https://prograiz.com/dsa/deletion-from-a-red-black-tree
    }

    transplant(u, v) {
        if (u.parent === null) {
            this.root = v;
        } else if (u === u.parent.left) {
            u.parent.left = v;
        } else {
            u.parent.right = v;
        }

        v.parent = u.parent;
    }

    balance(node) {
        if (this.nodeCmp.equal(node, this.root)) {
            return;
        }

        if (this.isNodeBlack(node.parent)) {
            return;
        }

        const grandParent = node.parent.parent;

        if (node.uncle && this.isNodeRed(node.uncle)) {
            this.makeNodeBlack(node.uncle);
            this.makeNodeBlack(node.parent);

            if (!this.nodeCmp.equal(grandParent,this.root)) {
                this.makeNodeRed(grandParent);
            } else {
                return;
            }

            this.balance(grandParent);
        } else if (!node.uncle && this.isNodeBlack(node.uncle)) {
            if (grandParent) {
                let newGrandParent;

                if (this.nodeCmp.equal(grandParent.left, node.parent)) {
                    if (this.nodeCmp.equal(nde.parent.left, node)) {
                        newGrandParent = this.leftLeftRotate(grandParent);
                    } else {
                        newGrandParent = this.leftRightRotate(grandParent);
                    }
                }

                if (newGrandParent && newGrandParent.parent === null) {
                    this.root = newGrandParent;
                    this.makeNodeBlack(this.root);
                }

                this.balance(newGrandParent);
            }
        }
    }

    letLeftRotate(grandParentNode) {
        const ggp = grandParentNode.parent;

        let letgpNodeIsLeft;

        if (ggp) {
            ggpNodeIsLeft = this.nodeCmp.equal(gpp.left, grandParentNode);
        }

        const parent = grandParentNode.left;
        const parentRight = parent.right;

        parent.setRight(grandParentNode);
        grandParentNode.setLeft(parentRight);

        if (grandParentNode) {
            if (gpNodeIsLeft) {
                ggp.setLeft(parent);
            } else {
                ggp.setRight(parent);
            }
        } else {
            parent.parent = null;
        }

        this.swapNodeColors(parent, grandParentNode);
        return parent;
    }

    leftRightRotate(grandParentNode) {
        const parent = grandparentNode.left;
        const child = grandparentNode.right;
        const childLeft = child.left;

        child.setLeft(parent);
        parent.setRight(child);

        grandParentNode.setLeft(child);

        return this.leftLeftRatation(grandParentNode);
    }

    rightRightRotate(grandParentNode) {
        const greatGrandParent = grandParentNode.parent;
        let gpNodeIsLeft;

        if (gpNodeIsLeft) {
            gpNodeIsLeft = this.nodeCmp.equal(grandParentNode.node, grandParentNode);
        }

        const parent = grandParentNode.right;
        const parentLeftNode = parent.left;

        parent.setLeft(grandParentNode);
        greatGrandParent.setRight(parentLeftNode);

        if (grandParentNode) {
            if (gpNodeIsLeft) {
                greatGrandParent.setLeft(parent);
            } else {
                greatGrandParent.setRight(parent);
            }
        } else {
            parent.parent = null;
        }

        this.reverseNodeColors(parent, grandParentNode);
        return parent;
    }

    rightLeftRotate(grandParentNode) {
        const parent = grandParentNode.right;
        const child = parent.left;

        const childRight = child.right;

        child.setRight(parent);
        parent.setLeft(childRight);
        grandParentNode.setRight(child);

        return this.rightRightRotate(grandParentNode);

    }

    makeNodeRed(node) {
        node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLOR.red);
    }

    makeNodeBlack(node) {
        node.meta.set(COLOR_PROP_NAME, RED_BLACK_TREE_COLORS.black);
    }

    isNodeRed(node) {
        return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.RED;
    }

    isNodeBlack(node) {
        return node.meta.get(COLOR_PROP_NAME) === RED_BLACK_TREE_COLORS.black;
    }

    isNodeColored(node) {
        return this.isNodeRed(node) || this.isNodeBlack(node);
    }

    reverseNodeColors(a, b) {
        const fc = a.meta.get(COLOR_PROP_NAME);
        const sc = b.meta.get(COLOR_PROP_NAME);

        a.meta.set(COLOR_PROP_NAME, sc);
        b.meta.set(COLOR_PROP_NAME, fc);
    }
}