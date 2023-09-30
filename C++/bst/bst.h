#include "tree_node.h"

class bst {
    bst();
    ~bst();

    Node* search(Node* pNode, int key);
    int findMin(Node* pNode);
    int findMax(Node* pNode);
    int successor(Node* pNode);
    int predessor(Node* pNode);
    Node* remove(Node* pNode, int key);
    void insert(Node* pNode, int key);

    void inOrder(Node* pNode);
}