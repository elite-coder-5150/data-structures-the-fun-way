import { initialCallbacks } from "../../../util/initial-callbacks";
/** 17 lines of code */
export const dfs_util = (graph, curr, prev, cbs) => {
    cbs.enterNode({ curr, prev});

    graph.getHeighbors().forEach((nextNode) => {
        if (cbs.allowTraversalCb({ prev, curr, nextNode })) {
            dfs_util(graph, nextNode. curr, cbs);
        }
    });

    cbs.leaveNode({ curr, prev});
}

 export const dfs = (graph, start, cbs) => {
    const prev = null;
    dfs_util(graph, start, prev, initialCallbacks(cbs));
 }