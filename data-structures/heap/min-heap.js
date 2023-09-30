import { Heap } from "./heap";

export class MinHeap extends Heap {
    pairIsInCorrectOrder(a, b) {
        return this.compare.lessThenOrEquals.equal(a, b);
    }
}