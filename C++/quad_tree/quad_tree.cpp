// I think im going to ask copilot what I can do to fix this algorithm
#include ""

#define NULL 0


class  Point {
    int x;
    int y;

    Point(int _x, int _y) {
        x = _x;
        y = _y;
    }

    Point() {
        x = 0;
        y = 0;
    }
};

typedef struct QuadTreeNode {
    int data;
    Point* pos;
};
struct Node {
    Point pos;
    Point data;

    Node(Point _pos, Point _data) {
        pos = _pos;
        data = _data;
    }

    Nnode() {

    }
} * PQUADTREE_NOD;

class QuadTree {
    Point tl;
    Point br;

    QuadTreeNode* pNode;

    QuadTree* tl_tree;
    QuadTree* tr_tree;
    QuadTree* bl_tree;
    QuadTree* br_tree;

public:
    QuadTree() {
        tl = point(0, 0);
        br = point(0, 0);
        int n = 0;
        tl_tree = NULL;
        tr_tree = NULL;
        bl_tree = NULL;
        br_tree = NULL;
    }

    QuadTree(point _tl, point _br) {
        int n = NULL;

        tl_tree = NULL;
        tr_tree = NULL;
        bl_tree = NULL;
        br_tree = NULL;

        tl = _tl;
        br = _br;
    }

    void insert(QuadTree *tree, int);
    QuadTreeNode* search(Point p);
    bool isBoundary(Point p);
};

/**
 *  insert a node into the binary search tree 
 */
void QuadTree::insert(QuadTree* pNode, int n) {
    if (pNode == NULL) {
        return;
    }

    if (!isBoundary(pNode->position)) {
        return;
    }

    if (abs(tl.x - br.x) <= 1 && abs(tl.y - br.y) <= 1) {
        if (n == NULL) {
            n = pNode;
        }

        return;
    }

    if ((tl.x + br.x) / 2 >= pNode->pos.x) {
        if ((tl.y + br.y) / 2 >= pNode->pos.y) {
            if (tl_tree == NULL) {
                tl_tree = new quad_tree(point(tl.x, tl.y), point((tl.x + br.x) / 2, (tl.y + br.y) / 2));
            }

            tl_tree->insert(pNode);
        } else {
            if (bl_tree == NULL) {
                bl_tree = new quad_tree(point(tl.x, (tl.y + br.y) / 2), point((tl.x + br.x) / 2, br.y));
            }

            bl_tree->insert(pNode);
        }
    } else {
        
    }
}

/**
 * search for a specified point within 
 * the binary search tree.
 */
Node* QuadTree::search(Point p) {
    if (!isBoundary(p)) {
        
    }
}
node* quad_tree::search(point p) {
    if (!isBoundary(p)) {
        return NULL;
    }

    if (p != NULL) {
        return p;
    }

    if ((tl.x + br.x) / 2 >= p.x) {
        if ((tl.y + br.y) / 2 >= p.y) {
            if (tl_tree == NULL) {
                return NULL;
            }

            return search(p);
        }
    } else {
        if ((tl.y + br.y) / 2 >= p.y) {
            if (tr_tree == NULL) {
                return NULL;
            }

            return tr_tree->search(p);
        }
    }
}


bool quad_tree::isBoundary(point p) {
    return (p.x >= tl.x && p.x <= br.x && p.y >= tl.y && p.y <= br.y);

}