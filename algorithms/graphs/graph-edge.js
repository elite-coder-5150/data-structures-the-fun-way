export class GraphEdge {
    constructor(sn, en, wieght = 0) {
        this.sn = sn;
        this.en = en;
        this.wieght = wieght;
    }

    getKey() {
        const snKey = this.sn.getKey();
        const enKey = this.en.getKey();

        return `${snKey} ${enKey}`;
    }

    reverse() {
        const tmp = this.sn;
        this.sn = this.en;
        this.en = tmp;

        return this;
    }

    toString() {
        return this.getKey();
    }
}