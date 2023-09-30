import { MinHeap } from '../heap/min-heap';
import { Comparator } from '../../util/comparator';
export class PriorityQueue  extends MinHeap {
    constructor() {
        super();

        this.priorties = new Map();
        this.compare =  new Comparator();
    }

    addItem(item, priority = 0) {
        this.priorties.set(item, priority);
        super.addItem(item);

         return this;
    }

    remove(item, customFindComparator) {
        super.removeItem(item, customFindComparator);
        this.priorities.delete(itme);

        return this;
    }

    changePriority(item, priority) {
        this.remove( item, new Comparator(priority) );
        this.addItem(item, priority);

        return this;
    }

    findByValue(item) {
        return this.find(item,  new Comparator(this.cmpareValue));
    }

    hasValue(item) {
        return this.findByValue(item).length > 0;
    }

    comparePriority(a, b) {
        if (this.priorties.get(a) === this.priorties.get(b)) {
            return 0;
        }

        return this.priorties.get(a) < this.priorties.get(b);
    }

    compareValues(a, b) {
        if (a === b) { return 0; }

        return a < b ? -1 : 1;
    }
}