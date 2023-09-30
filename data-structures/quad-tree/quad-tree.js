
import { QuadaTreeNode } from './quad-tree-node';
import { Point } from './point';

export class  Node {
    constructor() {
        this.pos = new Point();
        this.data = new Point();
    }
}

export class QuadTree {
    constructor() {
        this.tl = new Point(0, 0);
        this.br = new Point(0, 0);

        this.node = new QuadTreeNode();

        this.tl_tree = new QuadTree();
        this.br_tree = new QuadTree();
        this.bl_tree = new QuadTree();
        this.br_tree = new QuadTree();
    }

    insert(node, data) {
        if (node == null) {
            return;
        }

        
    }

    search(p) {
        
    }

    /**
     * untility function that check if a point is within 
     * the specified boundries.
     */
    isInBoundry(p) {
        return (p.x >= this.tl.x && p.x <= this.br.x && p.y >= this.tl.y && p.y <= this.br.y)
    }
}