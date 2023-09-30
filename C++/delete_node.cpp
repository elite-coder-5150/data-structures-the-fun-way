#include "delete_node.h"

/** delete a node from a doubly linked list */
void deleteNode(Node** pHead, Node* pDelete) {
    if (pHead == NULL || pDelete == NULL) {
        return;
    }

    if (pHead == pDelete) {
        *pHead = pDelete->next;
    }

    if (pDelete->next != NULL) {
        pDelete->pNext->pPrev = pDelete->pPrev;
    }

    if (pDelete->pPrev != NULL) {
        pDelete->pPrev->pNext= pDelete->pNext;
    }

    free(pDelete);
    return;
}