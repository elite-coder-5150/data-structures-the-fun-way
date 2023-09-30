import { Comparator } from '../../util/comparator';

/**
 *  simple quad tree implementation in javascript
 */
export class QuadTree {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.text = '';
        this.canSplit = true;

        this.compare = new Comparator();
    }

    split() {}

    getIdx(rect) {}

    insert(node, x, y) {
        let num_node_points = node.num_node_points + 1

        let x_bin_size = (node.x_max - node.x_min) / 2.0;
        let y_bin_size = (node.y_max - node.y_min) / 2.0;
        let x_bin = Math.floor((x - node.x_min) / x_bin_size);
        let y_bin = Math.floor((y - node.y_min) / y_bin_size);

        if (!node.isLeaf()) {
            if (node.children[x_bin][y_bin] == null) {
                node.children[x_bin][y_bin] = new QuadTree(
                    node.x_min + x_bin * x_bin_size,
                    node.x_min + y_bin * y_bin_size,
                    node.y_min + y_bin * y_bin_size,
                    node.y_min + (y_min + 1) * y_bin_size

                   
                )
            }

            this.insert(node.children[x_bin][y_bin], x, y)
            return``
        }

        node.points.append(point(x, y));

        if (this.canSplit(node)) {
            node.isLeaf = false;

            for (let i = 0; i <= node.points.length; i++) {
                this.insert(node, pt.x, pt.y);
            }

            this.node.num_node_points = (node.num_node_points + 1) - nodes.points.length;
            this.node.points = [];
        }
    }

    /**
     * 
     * @param {*} node - The node to collapse.
     * @returns {array} Array of nodes points.
     */
    collapse(node) {
        if (node.isLeaf) {
            return node.points;
        }

        for (i in nodes) {
            for (j in nodes[i]) {
                if (node.children[i][j] != null) {
                    const sub_pts = this.collapse(node.children[i][j]);
                    for (pt in  sub_pts) {
                        node.points.append(pt);
                    }

                    node.children[i][j] = null;
                }
            }
        }

        node.isLeaf = true;
        return node.points;
    }

    deleteElem(node, x, y) {
        if (node.isLeaf) {
            let i = 0;

            while (i < node.points.length) {
                if (node.points[i].x === x && node.points[i].y === y) {
                    node.pop();
                    num_node_points--;
                    return true; 
                }
                
                i++
            }

            return false;
        }

        let x_bin_size = (node.x_max - node.x_min) / 2.0;
        let y_bin_size = (node.y_max - node.y_min) / 2.0;
        
        let x_bin = Math.floor((x - node.x_min) / x_bin_size);
        let y_bin = Math.floor((y - node.y_min) / y_bin_size);

        if (node.children[x][y] == null) {
            return false;
        }

        if (this.deleteEleme(node.children[x_bin][y_bin], x, y)) {
            num_node_points--;

            if (node.children[x_bin][y_bin].num_node_points == 0) {
                node.children[x_bin][y_bin] = null;
            }

            if (this.canSplit === false) {
                node.points = this.collapse(node);
            }

            return true;
        }

        return false;
    }

    minDist(node, x, y) {
        let x_dist = 0.0;
        let y_dist = 0.0;

        if (x < node.x_bin) {
            x_dist = node.x_bin - x;
        }

        if (x > node.x_bin) {
            x_dist = x - node.x_max;
        }

        if (y < node.y_bin) {
            y_dist = node.y_bin - y;
        }

        if (y > node.y_max) {
            y_dest = y - node.y_max;
        }

        return Math.sqrt(x_dist * x_dist, y_dist * y_dist);
    }

    /**
     * 
     * @param {*} tree - the tree to calculate the distance between the two points
     * @param {*} x - the y point of the ndoe.
     * @param {*} y - the y point of the node.
     * @param {*} best_dist 
     * @returns ???
     */
    nearestNeighbor(tree, x, y, best_dist) {
        if (this.minDist(node, x, y) >= best_dist) {
            return null;
        }

        let best_candidate = null;

        if (node.isLeaf) {
            for (let i in node.points) {
                let dist = eucliideanDistance(node);

                 if (dist < best_dist) {
                    dist = best_dist;
                 } else if (dist > best_dist) {
                    console.log('distance is ' + dist);
                }
            }
        }
    }

    /**
     * retrieves an element from the tree.
     * @param {*} rect 
     */
    retrieve(rect) {}

    /**
     * determines whether the given node is within the boundries, returns false by default, otherwise
     * returns true.
     */
    isInBoundries() {
        return false;
    }

    /**
     * simple search function, it internally calls the search_util method.
     * @param {*} root - root node to search
     * @param {*} x - the x coordinate of the node
     * @param {*} y - the y coordinate of the node
     * @returns a function.`
     */
    search (root, x, y) {
        return this.search_util(root, x, y);
    }

    /**
     * simple search utility function that get called in the search method.
     * its a variant of the binary search algorithm.
     * 
     * this function is recursive and is a variant of the binary search algorithm
     * @param {*} node - the node to search
     * @param {*} x - the x position
     * @param {*} y - the y position
     * @returns 
     */
    search_util(node, x, y) {
        if (node.text != null) {
            return node.text
        }

        let half_w = node.width / 2,
            half_h = node.height / 2,
            idx = 0;

        if (x >= node.x + half_w) {
            idx++
        }

        if (y >= node.y + half_h) {
            idx += 2;
        }

        if (node.children[idx] != null) {
            return this.search_util(node.children[idx], x, y);
        }
    }

    clear() {
        this.objects = [];

        for (let i = 0; i < this.objects.length; i++) {
            if (this.objects.length) {
                this.nodes[i].clear();
            }
        }

        this.nodes = [];
    }
}