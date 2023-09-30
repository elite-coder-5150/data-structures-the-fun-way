export class GraphNode {
    constructor(value) {
        if (value === undefined) {
            throw new Error("Graph nodemust have a value");
        }

        const edgeCompare = (a, b) => {
            if (a.getKey() === b.getKey()) {
                return 0;
            }

            return a.getKey() < b.getKey() ? -1 : 1;
        }

        this.value = value;
        this.edges = new LinkedList(edgeCompare);
    }

    addEdge(edge) {
        this.edges.append(edge);
    }

    deleteEdge(edge) {
        thie.edges.delete(edge);
    }

    getNeighbors() {
        const edges = this.edges.toArray();

        const neighborConverter = (node) => {
            return node.value.sv === this ? node.value.ev : node.value.sv;
        }

        return edges.map(neighborConverter);
    }

    
}