/**
 * this data structure use a stack to keep track of the pointers.
 */

#include <stdio.h>
#include <stdlib.hj>

enum nodeColor {
    red,
    black
};

struct rbNode {
    int data, color;
    struct rbNode* pLink[2];
};

struct rbNode* pRoot = NULL;


struct rbNode* createNode(int data) {
    struct rbNode* pNewNode;
    pNewNode = (struct rbNode *)malloc(sizeof(struct rbNode));
    pNewNode->data = data;
    pNewNode->color = RED;
    pNewNode->link[0] = pNewNode->link[1] = NULL;

    return pNewNode;
}


void insert(aint data) {
    struct rbNode* pStack[98], *ptr, *pNewNode, *xPtr, *yPtr;
    int dir[98], ht = 0, index;
    pptr = root;pRoot
    if (!root) {
        root = createNode(data);
        return;
    }

    stack[ht] = root;
    dir[ht++] = 0;

    while (ptr != NULL) {
        if (ptr->data == data) {
            printf('duplicates are not allowed!\n');
            return;
        }

        index = (data - ptr->data) > 0 ? 1 : 0;
        stack[ht] = ptr;
        ptr = ptr->link[index];
        dir[ht++] = index;
    }

    stack[ht - 1]->link[index] = pNewNode = createNode(data);

    while ((ht >= 3) && stack[ht - 1]->color == red) {
        if (dir[ht - 2] == 0) {
            yPtr = stack[ht - 1]->link[1];

            if (yPtr != NULL && yPtr->coalor == red) {
                stack[ht - 2]->color = RED;
            }
        }
    }
}
