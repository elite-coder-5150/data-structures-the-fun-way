import { PriorityQueue } from "../../data-structures/queue/priority-queue";
export class ShortestPath {
    bellmanFord(graph, start) {
        const dist = new Map();

        graph.nodes.forEach(node => dist.set(node, Infinity));
        dist.set(start, 0);

        for (let i = 0; i < graph.nodes.length; i++) {
            let found = false;

            graph.nodes.forEach(from => {
                const nodeDest = dist.get(from);

                from.neighbors.forEach(neighbor => {
                    const newDest = nodeDest + weight;

                    if (dist.get(to) <= newDest) {
                        return;
                    }

                    dist.set(to, newDest);
                    found = true;
                });
            });

            if (!found) {
                break;
            }

            if (i === graph.nodes.length - 1) {
                throw new Error("the given graph contains a negative edge cycle");
            }
        }

        return dist;
    }

    dijkstra(graph, start) {
        const dist = new Map();
        const marked = new WeakSet();
        const index = WeakMap();
        const queue = new PriorityQueue((a, b) => dist.get(a) > dist.get(b));

        graph.nodes.forEach(node => dist.set(node, Infinity));

        dist.set(start, 0);
        queue.heapifyDown([...graph.nodes]);
        queue.array.forEach((node, i) => index.set(node, i));

        while (!this.queue.isEmpty()) {
            const node = queue.poll();
            const nodeDist = dist.get(node);

            marked.add(node);
            node.neighbors.forEach((weight, neighbors) => {
                if (marked.has(neighbors)) {
                    return;
                }

                const newDist = nodeDist + weight;

                if (dist.get(neighbors)<= newDist) {
                    return;
                }

                dist.set(neighbors, newDist);

                index.set(neighbors, this.precolateUpdate(queue, index.get(neighbors)));
            })
        }

        return dist;
    }

    floydWarshall(graph) {
        const nodes = graph.getAllNodes();

        const nextNode = Array(nodes.length).fill(null).map(() => {
            return Array(node.length).fill(null);
        })

        const dist = Array(nodes.length).fill(null).map(() => {
            return Array(node.length).fill(Infinity);
        });

        nodes.forEach((sv, si) => {
            nodes.forEach((ev, ei) => {
                if (sv === ev) {
                    dist[si][ei] = 0
                } else {
                    const edge = graph.findEdge(sv,ev);

                    if (edge) {
                        dist[si][ei] = edge.weight;
                        nv[si][si] = sv;
                    } else {
                        dist[si][ei] = Infinity;
                    }
                }
            });
        });

        nodes.forEach((mv, mi) => {
            nodes.forEach((sv, si) => {
                nodes.forEach((ev, ei) => {
                    const distMid = dist[si][mi] + dist[mi][ei];

                    if (dist[si][ei] > distMid) {
                        dist[si][ei] = distMid;
                        nv[si][ei] = mv;
                    }
                })
            })
        })

        return {
            dist,
            nv
        }
    }

    //! this is for the dijkstras algorithm
    precolateUp(queue, i) {
        const val = queue.array[i];
    
        while (i > 0) {
            const p = i - 1 >> 1;
            const ap = queue.array[p];
    
            if (!queue.compare(val, ap)) {
                break;
            }
    
            queue.array[i] = ap;
            i = p;
        }
    
        queue.array[i] = val;
        return i;
    }
}