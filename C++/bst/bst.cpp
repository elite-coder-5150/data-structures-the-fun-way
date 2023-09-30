#include "tree_node.h"

void bst::insert(Node* pNode, int key) {
    if (pNode == NULL) {
        pNode = new Node();
        pNode->key = key;
        pNode->left = NULL;
        pNode->right = NULL;
        pNode->parent = NULL;
    } else if (pNode->key < key) {
        pNode->right = insert(pNode->right, key);
        pNode->right->parent = pNode;
    } else {
        pNode->left = insert(pNode->left, key);
        pNode->left->parent = pNode;
    }

    return pNode;
}

void bst::inOrder(Node* pNode) {
    if (pNode == NULL) {
        return;
    }
    inOrder(pNode->left);

    std::cout << pNode->key << " ";

    inOrder(pNode->right);
}

Node* bst::search(Node* pNode, int key) {
    if (pNode == null) {
        return NULL;
    } else if (pNode->key == key) {
        return pNode;
    } else if (pNode->key < key) {
        return search(pNode->right, key);
    } else {
        return search(pNode->left, key)
    }
}

int bst::findMin(Node* pNode) {
    if (pNode == NULL) {
        return -1
    } else if (pNode->left == NULL) {
        return pNode->key;
    } else {
        return findMin(pNode->left)
    }
}

int bst::findMax(Node* pNode) {
    if (pNode == NULL) {
        return NULL;
    } else if (pNode->right == NULL) {
        return node->key
    } else {
        return findMax(pNode->right)
    }
}

int bst::successor(Node* pNode) {
    if (pNode->right != NULL) {
        return findMin(pNode->right);
    } else {
        Node* pParent = pNode->parent;
        Node* pCurr = pNode;

        while (pParent != NULL && (pCurr == pParent->right)) {
            pCurr = pParent;
            pParent = pCurr->parent;
        }

        return pParent == NULL ? pParent->key
    }
}

int bst::predessor(Node* pNode) {
    if (pNode->left != NULL) {
        return findMax(pNode->left);
    } else {
        Node* pParent = pNode->parent;
        Node* pCurr = pNode;

        while ((pParent != NULL) && (pCurr == pParent->left)) {
            pCurr = pParent;
            pParent = pCurr->parent;
        }

        return pParent == NULL ? -1 : pParent->key;
    }
}

Node* bst::remove(Node* pNode, int key) {
    if (pNode == NULL) {
        return NULL
    }

    if (pNode->key == key) {
        if (pNode->left == NULL && pNode->right == NULL) {
            pNode->right->parent = pNode->parent;
            pNode = pNode->right;
        } else if (pNode->left != NULL && pNode->right == NULL) {
            pNode->left->parent = pNode->parent;
            pNode = pNode->left;
        } else {
            int s_key = successor(key);
            pNode->key = s_key;

            pNode->right = remove(pNode->right, s_key);
        }
    } else if (pNode->key < key) {
        pNode->right = remove(pNode->right, key);
    } else {
        pNode->left = remove(pNode->left, key);
    }

    return pNode;
}

