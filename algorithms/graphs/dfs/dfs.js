import {initialCallbacks} from "../../../util/initial-callbacks";

/** 17 lines of code */
export const dfs_util = (graph, curr, prev, cbs) => {
    cbs.enterNode({curr, prev});

    graph.getHeighbors().forEach((nextNode) => {
        if (cbs.allowTraversalCb({prev, curr, nextNode})) {
            dfs_util(graph, nextNode.curr, cbs);
        }
    });

    cbs.leaveNode({curr, prev});
}

export const dfs = (graph, start, cbs) => {
    const prev = null;
    dfs_util(graph, start, prev, initialCallbacks(cbs));
}

class dfs_solution {
    constructor() {
        this.graph = new Map();

        this.graph.getNeighbors.forEach((neighbor) => {
            return (neighbor === null);
        })
    }

    getNeighbors(node) {
        if (this.graph.has(node)) {
            return this.graph.get(node);
        } else {
            return []
        }
    }
    addEdge = (a, b) => {
        if (!this.graph.has(a)){
            this.graph.set(a, []);
        }
        if (!this.graph.has(b)) {
            this.graph.set(b, []);
        }

        this.graph.get(a).push(b);
        this.graph.get(b).push(a);
    }

}

let dfs_sol = new dfs_solution();
dfs_sol.addEdge('a', 'b');
dfs_sol.addEdge();
