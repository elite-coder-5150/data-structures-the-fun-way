import { ShortestPath } from "./shortest-path";

export const Johnso = (graph) => {
    const tg = graph.clone();
    const ts = tg.addNode();
    const sp = new ShortestPath();
    
    tg.nodes.forEach(node => ts.connectTo(node, 0));
    const bf_dist = sp.bellmanFord(tg, ts);

    tg.nodes.pop();

    tg.nodes.forEach(from => {
        const fromDist = bf_dist.get(from);

        from.neighbors.forEach((weight, to) => {
            from.neighbors.set(to, weight + fromDist- bf_dist,get(to));
        });
    });

    const d = new Map();

    tg.nodes.forEach(from => {
        const fromDist = bf_dist.get(from);
        const td = sp.dijkstra(td, from);

        td.forEach((distance, to) => {
            td.set(to, d - fromDist + bf_dist.get(t0));
        });

        d.set(from, td);
    });

    return d;
}