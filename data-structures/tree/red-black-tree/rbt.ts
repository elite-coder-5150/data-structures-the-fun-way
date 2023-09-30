import { Comparator } from '../../../util/comparator';
//? TODO: fix the relative path so i can import the binarytreenode.
// import { BinaryTreeNode } from '../../data-structures/binary-search-tree/tree_node';

export class RBTree /** extends*/ /**BinaryTreeNode*/ {
    public nodeCmp;
    public root;

    constructor() {


        this.nodeCmp = new Comparator();
        // this.root = new BinaryTreeNode(this.nodeCmp)
    }

    balance(node) {
        if (this.nodeCmp.equal(node, this.root)) {

        }
    }

    add(value) {
        //! its time to go to bed.
    }
}