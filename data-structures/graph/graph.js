import { Stack } from '../stack/stack';

export class Graph {
    constructor(isDirected = false) {
        this.nodes = {};
        this.edge = {};
        this.isDirected = isDirected;
        this.stack = new Stack();
    }

    addNode(newNode) {
        this.nodes[newNode.getKey()] = newNode;
        return this;
    }

    getNodeByKey(key) {
        return this.nodes[key];
    }

    getNeighbours(node) {
        return node.getNeighbours();
    }

    getAllNodes() {
        return Object.values(this.nodes);
    }

    getAllEdges() {
        return Object.values(this.edges);
    }

    addEdge(edge) {
        let sn = this.getNodeByKey(edge.sn.getKey());
        let en = this.getNodeByKey(edge.en.getKey());

        if (!sn) {
            this.addNode(edge.sn);
            _sn = this.getNodeByKey(edge.sn.getKey());
        }

        if (!en) {
            this.addNode(edge.en);
            _en = this.getNodeByKey(edge.en.getKey());
        }

        if (this.edges[edge.getKey()]) {
            throw new Error("edge has already been added")
        } else {
            this.edges[edge.getKey()] = edge;
        }

        if (this.isDirected) {
            sn.addEdge(edge);
        } else {
            sn.addEdge(edge);
            en.addEdge(edge);
        }

        return this;
    }

    deleteEdge(edge) {
        if (this.edges[edge.getKey()]) {
            delete this.edges[edge.getKey()];
        } else {
            throw new Error("edge not found");
        }

        const sn = this.getNodeByKey(edge.getKey());
        const en = this.getNodeByKey(edge.getKey());
    }

    findEdge(sn, en) {
        const node = this.getNodeByKey(sn.getKey());
        if (!node) {
            return null;
        }

        return node.findEdge(en);
    }

    getWeight() {
        return this.getAllEdges().reduce((weight, edge) => {
            return weight + edge.getWeight();
        }, 0);
    }

    reverse() {
        this.getAllEdges.forEach((edge) => {
            this.deleteEdge(edge);
            edge.reverse();
            this.addEdge(edge);
        });

        return this;
    }

    getNodeIndices() {
        const nodeIdx = {};

        this.getAllNodes().forEach((node, idx) => {
            nodeIdx[node.getKey()] = idx;
        });

        return nodeIdx;
    }

    getAdjMatrix() {
        const nodes = this.getAllNodes();
        const nodeIdx = this.getNodeIndices();

        const adjMatrix = Array(nodes.length).fill(null).map(() => {
            return Array(nodes.length).fill(Infinity);
        });

        nodes.forEach((node, nodeIdx) => {
            node.getNeighbours().forEach((neighbour) => {
                const neighborIdx = nodeIdx[neighbour.getKey()];
                adjMatrix[neighbourIdx] = this.findEdge(node, neighbour).weight;
            });
        });

        return adjMatrix;
    }

    topologicalSortUtil(v, visited, s = []) {
        visited[v] = true;

        for (let i in adjMatrix) {
            if (!visited[i]) {
                this.topologicalSort(i, visited, this.stack[i]);
            }
        }

        s.push(v);
    }

    topologicalSort() {
        const visited = [];

        for (let i = 0; i < stack.length; i++) {
            if (!visited[i]) {
                this.topologicalSortUtil(i, visited, this.stack[i]);
            }
        }

        while (!this.stack.isEmpty()) {
            console.log(this.stack.top() + " ");
            this.stack.pop();
        }
    }

    toString() {
        return Object.keys(this.nodes).toString();
    }
}