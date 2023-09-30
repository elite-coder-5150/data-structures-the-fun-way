import { LinkedList } from "../linked-list/linked-list";

export class GraphNode {
    constructor(value) {
        if (value === undefined) {
            throw new Error("Graph node must have a value");
        }

        const edgeComp = (a, b) => {
            if (a.getKey() === b.getKey()) {
                return 0;
            }
            
            return (a.getKey() < b.getKey()) ? -1 : 1;
        };

        this.value = value;
        this.edges = new LinkedList(edgeComp);
    }

    addEdge(edge) {
        this.edges.append(edge);
        return this;
    }

    deleteEdge(edge) {
        this.edges.delete(edge);
    }

    getNeighbors() {
        const edges = this.edges.toArray();

        const neighborConverter = (node) => {
            return node.value.start === this ? node.value.endNode : node.value.startNode;
        }

        return edges.map(neighborConverter);
    }

    getEdges() {
        return this.edges.toArray().map((linkedListNode) => linkedListNode.value);
    }

    getDegree() {
        return this.edges.toArray().length;
    }

    hasEdges() {
        const edgeNode = this.edges.find({ callback: (edge) === requiredEdge});
        return !!edgeNode
    }

    hasNeighbor(node) {
        const _node = this.edges.find({ callback: (edge) === node === node || edge.endNode === node});
        return !!_node; 
    }

    findEdges(node) {
        const edgeFinder = (edge) => {
            return edge.startNode === node || edge.endNode === node
        };

        const edge = this.edges.find({ callback: edgeFinder});
        return edge ? edge.value : null;
    }

    getKey() {
        return this.value;
    }

    deleteAllEdges(){
        this.getEdges().forEach((edge) => this.deleteEdge(edge));
        return this;
    }

    toString(cb) {
        return cb ? cb(this.value) : `${this.value}`;
    }
}