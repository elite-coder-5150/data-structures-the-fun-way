typedef struct Node {
    int data;
    struct Node* pNext;
};

void push(struct Node** pHead, int newData) {
    struct Node* pNewNode = new Node;

    pNewNode->data = pNewNode;
    pNewNode->next = (*pHead);
    (*pHead) = pNewNode;
}

bool detectLoop(struct Node* pHead) {
    unordered_set<Node *> s;

    while (pHead != NULL) {
        if (s.find(pHead) != s.end()) {
            return true;
        }

        s.insert(pHead);
        pHead = pHead->pNext;
    }

    return false;
}

int main() {
    struct Node* pHead = NULL;

    push(&pHead, 20);
    push(&pHead, 4);
    push(&pHead, 15);
    push(&pHead, 10);

    pHead->next->next->next->next = pHead;

    if (detectLoop(pHead)) {
        std::cout << "loop found";
    } else {
        std::cout << "no loop found";
    }

    return 0;
}