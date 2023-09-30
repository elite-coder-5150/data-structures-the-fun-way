import { Comparator } from "../../util/comparator";

export class Heap {
    constructor(cmpFn) {
        if (new.target === Heap) {
            throw new TypeError("cannot construct Heap instance directly");
        }

        this.heapContainer = [];
        this.compare = new Comparator(cmpFn);
    }

    getLeftChildIdx(parentIdx) {
        return (2 * parentIdx) + 1;
    }

    getRightChildIdx(parentIdx) {
        return (2 * parentIdx) + 2;
    }

    getParentIdx(childIdx) {
        return Math.floor((childIdx - 1) / 2);
    }

    hasParent(childIdxs) {
        return this.getParentIdx(childIdx) >= 0;
    }

    hasLeftChild(parentIdx) {
        return this.getLeftChildIdx(parentIdx) < this.heapContainer.length;
    }

    hasRightChild(parentIdx) {
        return this.getRightChildIdx(parentIdx) < this.heapContainer.length;
    }

    leftChild(parentIdx) {
        return this.heapContainer[this.getLeftChildIdx(parentIdx)]
    }

    rightChild(parentIdx) {
        return this.heapContainer[this.getRightChildIdx(parentIdx)];
    }

    parent(childIdx) {
        return this.heapContainer[this.getParentIdx(childIdx)];
    }

    swap(a, b) {
        const tmp = this.heapContainer[b];
        this.heapContainer[b] = this.heapContainer[a];
        this.heapContainer[a] = tmp;
    }

    peek() {
        if (this.heapContainer.length === 0) {
            return null;
        }

        return this.heapContainer[0];
    }

    poll() {
        if (this.heapContainer.length === 0) {
            return null;
        }

        if (this.heapContainer.length === 1) {
            return this.heapContainer.pop();
        }

        const item = this.heapContainer[0];

        this.heapContainer[0] = this.heapContainer.pop();
        this.heapifyDown();

        return item;
    }

    heapifyDown(csi = 0) {
        let currIdx = csi;
        let nexIdx = null;

        while (this.hasLeftChild(currIdx)) {
            if (this.hasRightChild(currIdx)) {
            }
        }
    }

    //! fixed this method, this methid is also known as 
    //! wrapper methood. or possibly a closure.
    pairIsInCorrectOrder(a, b) {
       //? throw new Error(`you have to implement heap pair comparison method for ${a} and ${b} values`)
       return this.heapSort();
    }

    /**
     * the function above inspired the following algorithm.
     */
    heapSort(unsortedList) {
        unsortedList = unsortedList.splice();

        heapSize = unsortedList.length;

        for (let i = Math.floor(heapSize / 2); i >= 0; i -= 1) {
            while (i <= heapSize) {
                let left = 2 * i;
                let right = 2 * i + 1;

                if (left < heapSize && unsortedList[left] >= unsortedList[i]) {
                    largest = left;
                } else {
                    largest = i;
                }

                if (right < heapSize && unsortedList[right] >= unsortedList[largest]) {
                    largest = right;
                }

                if (largest !== i) {
                    temp = unsortedList[i];
                    unsortedList[i] = unsortedList[largest];
                    unsortedList[largest] = temp;
                } else {
                    break;
                }
            }
        }

        /**
         * essentially start from the last item in the heap.
         */
        for (let i = unsortedList.length - 1; i > 0; i--) {
            let temp = unsortedList[0];
            unsortedList[0] = unsortedList[i];
            unsortedList[i] = temp;
            heapSize--;

            j = 0;

            while (j <= this.heapSize) {
                let l = 2 * j;
                let r = 2 * j + 1;

                if (l < heapSize && unsortedList[l] >= unsortedList[j]) {
                    largest = l;
                } else {
                    largest = j;
                }

                if (r < heapSize && unsortedList[r] >= unsortedList[largest]) {
                    largest = r;
                }

                if (largest !== j) {
                    // swap the values.
                    temp = unsortedList[j];
                    unsortedList[j] = unsortedList[largest];
                    unsortedList[largest] = temp;
                } else {
                    break;
                }
            }
        }
    }
}