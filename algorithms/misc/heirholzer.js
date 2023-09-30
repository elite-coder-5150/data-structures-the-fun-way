
/**
 * you can use the algorithms on a graph
 */
const eulerPath = (graph) => {
    const stack = [];
    const path = [];

    const dfs = (node) => {
        while (graph.adjList.get(node).length > 0) {
            const { node: nextNode, weight } = graph.adjList.get(node).pop();

            dfs(nextNode);
            path.push({node, nextNode, weight});
        }
    }

    for (const node of graph.adjList.keys()) {
        if (graph.adjList.get(node).length  % 2 === 0) {
            dfs(node);
            break;
        }
    }

    return path;
}

/**
 * searches the specified graph for the odd anumber of 
 * @param {*} graph 
 * @returns 
 */
const findOddDegreeNodes = (graph) => {
    const oddDegreeNodes = [];

    for (const [node, edges] of graph.adjList) {
        if (edges.length % 2 !== 0) {
            oddDegreeNodes.push(node);
        }
    }

    return oddDegreeNodes;
}

const findMinMatching = (graph, oddDegreeNodes) => {
    const matching = [];

    for (let i =0; i < oddDegreeNodes.length; i++) {
        matching.push([oddDegreeNodes[i], oddDegreeNode[i + 1]]);
    }

    return matching;
}

const augmentPath = (eulerianPath, matching) => {
    const augmentedPath = [...eulerianPath];

    for (const [u, v] of matching) {
        const idx = augmentedPath.findIndex(edge => edge.node === u );
        augmentedPath.splice(idx, 0, { node: u, nextNode: v, weight: 0});
    }

    return augmentPath;
}

/**
 * 
 * @param {*} path - the sortest path from the end of the tree
 *                   to the parent node. it simple calculates
 *                   the weight of each edge on the specified
 *                   path.
 * @returns {string} the full path of the nodes
 */
const calcTotalDistance = (path) => {
    if (path.length == 0) {
        /** heirholzer in js */
    }
    return path;
}

