import { DisjointSetItem } from "./disjoint-srt-item";

export class DisjointSet {
    constructor(keyCallback) {
        this.keyCallback = keyCallback;
        this.items = {};
    }

    makeSet(itemValue) {
        const disjointItem = new DisjointSetItem(itemValue, this.keyCallback);

        if (!this.items[disjointItem.getKey]) {
            this.items[disjointItem.getKey()] = disjointItem;
        }

        return this;
    }

    find(value) {
        const tmpItem = new DisjointSetItem(value, this.keyCallback);
        const requiredDisjoinItem = this.items[tmpItem.getKey()];

        if (!requiredDisjoinItem) {
            return null;
        }

        return requiredDisjoinItem.getRoot().getKey();
    }

    union(a, b) {
        const a_root = this.find(a);
        const b_root = this.find(b);

        if (a_root === null || b_root === null) {
            throw new Error('one or two values are not in the set');
        }

        if (a_root === b_root) {
            return this;
        }

         const root_a = this.items[a_root];
         const root_b = this.items[b_root];

         if (root_a.getRank() < root_b.getRank()) {
            root_b.addChild(root_a);
            return this;
         }

         root_a.addChild(root_b);
         return this;
    }

    inSameSet(a, b) {
        const root_a = this.find(a);
        const root_b = this.find(b);

        if (root_a === null || root_b === null) {
            throw new Error("one or two values are not in sets");
        }

        return root_a === root_b;
    }
}