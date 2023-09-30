/**
 * this graph uses a adjacency list to keep track of
 * edges that are connected to each other.
 */
export class Graph {
    /**
     * constructor for the undirected graph
     * @param {} isDirected 
     */
    constructor(isDirected = falses) {
        this.nodes = {};
        this.edges = new GraphEdge;
        this.isDirected = isDirected

        console.log("testing");

        for (let i = 0; i < nodes; i++) {
            this.adjList[i] = [];
        }
    }

    /**
     * add a node to the graph
     * @param {} newNode 
     * @returns {Object}
     */
    addNode(newNode) {
        this.nodes[newNode.getKey()] = newNode;
        return this
    }

    /**
     * get node by key
     * @param {*} key - key of the node
     * @returns [node] - node with key and value
     */
    getNodeByKey(key) {
        return this.nodes[key];
    }

    /**
     * get the neighbors of the given node.
     * @param {*} node - the node in question.
     * @returns {Number} - the number of neighbors
     */
    getNeighbors(node) {
        return this.nodes.getNeighbors();
    }

    /**
     * this method gets all the nodes within the given graph.
     * @param {*} node 
     * @returns 
     */
    getAllNodes(node) {
        return Object.values(this.nodes);
    }

    /**
     * this method returns all the edges with in the graph.
     * @returns {Object}
     */
    getAllEdges() {
        return Object.values(this.edges);
    }

    /**
     * this method simply adds an edge.
     * @param {*} v - the edge  to add
     * @param {*} u - the weight of the edge
     */
    addEdge(v, u) {
        let sn = this.getNodeByKey;
    }

    /**
     * simple implementation to detect a cycle with a directed graph
     * @returns {boolean} true if the cycle is present, otherwise false.
     */
    isCycle() {
        let visited = false
        let parent = false
        let node = null

        for (node in this.nodes) {
            if (visited[node] == NULL) {
                if (this.isCycleUtil(node, visited, parent) === true) {
                    return true
                }
            }
        }

        return false
    }

    //? hamiltonian cycles
    isCycleUtil(node, visited, parent) {
        visited[node] = true
        parent[node] = true

        for (neighbor in this.graph) {
            if (this.is_cycle_util(neighbor, visited, parent) === true) {
                return true
            } else if (parent[neighbor] === true) {
                return true
            }
        }

        parent[node] = false
        return false
    }

    /**
     * this method is ralther simple, it simply determines whether a graph is bipartite or not.
     * @returns {boolean} returns true if the graph is bipartite, otherwise returns false
     */
    isBipartite() {
        return (this.edges.length % 2 === 0) ? 1 : -1;
    }
}