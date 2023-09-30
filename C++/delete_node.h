class Node {
public:
    int data;
    Node* pNext;
    Node* pPrev;
};

void deleteNode(Node** pHead, Node* pDelete);