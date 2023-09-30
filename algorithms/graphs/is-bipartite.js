/**
 * this method determines if a graph is bipartite or not. if there are an even number of nodes
 * then the graph is said to be bipartite, otherwise return false.
 * @param {*} node 
 * @returns 
 */
export const isBipartite = (nodes) => {
    return (nodes.length % 2 === 0) ? 1 : -1;
}

isBipartite(nodes);