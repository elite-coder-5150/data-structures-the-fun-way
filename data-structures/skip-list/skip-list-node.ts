export class SkipListNode {
    value: number | null;
    forward: SkipListNode[];

    constructor(val: number | null = null) {
        this.value = val;
        this.forward = [];
    }
}