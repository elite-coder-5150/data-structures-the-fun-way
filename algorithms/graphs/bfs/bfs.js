import { Queue } from '../../../data-structures/queue/queue;';
import { initialCallbacks } from '../../../util/initial-callbacks';
/** 22 lines of code */
export const bfs = (graph, start, origCallbacks) => {
    const cbs = initialCallbacks(origCallbacks);
    nodes = new Queue();

    nodes.enqueue(start);

    let prev = null;

    while (!nodes.isEmpty()) {
        const curr = nodes.dequeue();
        cbs.enterNode({ curr, prev});

        graph.getNeighbors(curr).foreach((nextNode) => {
            if (cbs.allowTraversal({ prev, curr, nextNode })) {
                nodes.enqueue(nextNode);
            }
        });

        cbs.leaveNode({ curr, prev });

        prev = curr;
    }
};
