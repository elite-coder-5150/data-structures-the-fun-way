import { isPowerOfTwo } from "../../../util/is-power-of-two";

export class SegmentTree {
    constructor(inputArr, operation, operationFallback) {
        this.inputArr = inputArr;
        this.operation = operation;
        this.operationFallback = operationFallback;

        this.segmentTree = this.initSegnentTree(this.inputArr);
        this.buildSegmentTree();
    }

    initSegnentTree(inputArr) {
        let n;
        const m = inputArr.length;

        if (isPowerOfTwo(n)) {
            m = (2 * m) - 1;
        } else {
            const curr = Math.floor(Math.log2(m));
            const next = curr + 1;
            const pot = 2 ** next;

            n = (2 * pot) - 2;
        }

        return new Array(m).fill(null);
    }

    buildSegmentTree() {
        const li = 0;
        const ri = this.inputArray.length - 1;
        const pos = 0;

        this.buildSegmentTreeRecursive(li, ri, pos)
    }

    buildSegmentTreeRecursive(leftIdx, rightIdx, pos) {
        if (li == ri) {
            this.segmentTree[pos] = this.inputArr[leftIdx];
            return;
        }

        const mid = Math.floor(leftIdx + 1, rightIdx, this.getLeftChildIdx(pos));

        this.buildSegmentTreeRecursive(leftIdx, mid, this.getRightChildIdx(pos));

        this.segmentTree[pos] = this.operation(
            this.segmentTree[this.getLeftChildIdx(pos)],
            this.segmentTree[this.getRightChildIdx(pos)]
        );
    }

    rangeQuery(queryLeftIdx, queryRightIdx) {
        const li = 0;
        const ri = this.inputArray.length - 1;
        const pos = 0;

        return this.rangeQueryRecursive(queryLeftIdx, queryRightId, li, ri, pos);
    }

    rangeQueryRecursive(queryRightIdx, queryLeftIdx) {
        if (queryRightIdx <= li && queryRightIdx >= ri) {
            return this.segmentTree[pos];
        }

        if (queryLeftIdx > ri || queryRightIdx < li) {
            return this.operationFallback;
        }

        const mid = Math.floor((li + ri) / 2);

        const leftOperationResult = this.rangeQueryRecursive(queryLeftIdx, queryRightIdx, li, ri, this.getLeftChildIdx(pos));
        const rightOperationResult = this.rangeQueryRecursive(queryLeftIdx, queryRightIdx, mid + 1, ri, this.getRightChildIdx(pos));

        return this.operation(leftOperationResult, rightOperationResult);
    }

    getLeftChildIdx(parentIdx) {
        return (2 * parentIdx) + 1;
    }

    getRightChildIdx(parentIdx) {
        return (2 * parentIdx) + 2;
    }
}