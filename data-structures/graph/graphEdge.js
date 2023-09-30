export class GraphEdge {
    constructor(startNode, endNode, weight = 0) {
        this.startNode = startNode;
        this.endNode = endNode;
        this.weight = weight;
    }

    getKeys() {
        const sn_key = this.startNode.getKey();
        const en_key = this.endNode.getKey();

        return `${sn_key}_${en_key}`;
    }

    reverse() {
        const tmp = this.startNode;
        this.startNode = this.endNode
        this.endNode = tmp;

        return this;
    }

    toString() {
        return this.getKey();
    }
}