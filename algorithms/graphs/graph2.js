import {GraphNode} from "./graph-node";

export class DirectedGraph {
    constructor() {
        this.graph = new DirectedGraph();
        this.nodes = [new GraphNode()];
    }

    detectCycle(graph) {
        const visited = new Set();
        const recStack = new Set();

        const isCyclic = (node) => {
            if (!visited.has(node)) {
                visited.add(node);
                recStack.add(node);

                const neighbors = graph[node];

                for (const neighbor of neighbors) {
                    if (!visited.has(neighbor) && isCyclic(neighbor)) {
                        return true;
                    } else if (recStack.has(neighbor)) {
                        return true;
                    }
                }
            }

            recStack.delete(node);
            return false;
        }

        for (const node in graph) {
            if (isCyclic(node)) {
                return true;
            }
        }

        return false;
    }

    addNode(graph, node) {
        if (!graph.hasOwnProperty(node)) {
            this.nodes.push(node);
        }
    }

    //? implement this method in the morning
    /**
     * essently reverse the graph to find the sortest path.
     */
    transpose() {

    }

    getNeighbors() {
        return [];
    }
}

let dg = new DirectedGraph();
dg.detectCycle();
