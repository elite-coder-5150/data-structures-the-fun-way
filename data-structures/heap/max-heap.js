import { Heap } from "./heap";

export class MinHeap extends Heap {
    pairIsInCorrectOrder(a, b) {
        return this.compare.greaterThanOrEquals(a, b);
    }
}