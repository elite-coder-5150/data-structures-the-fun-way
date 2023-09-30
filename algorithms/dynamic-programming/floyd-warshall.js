const inf = 999999;

class AllPairsShortestPath {
    constructor() {
        this.v = 4;
    }

    floyWarshall(graph) {
        let dist = Array.from(Array(this.v))
        let i, j, k;

        for (i = 0; i < this.v; i++) {
            for (j = 0; j < this.v; j++) {
                dist[i][j] = graph[i][j];
            }
        }

        for (k = 0; k < this.v; k++) {
            for (i = 0; i < this.v; i++) {
                for (j = 0; j < this.v; j++) {
                    if (dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }
    }

    printSolution(dist) {
        document.write("Following matrix shows the shortest " + "distance between every pair of nodes <br />");

        for (let i = 0; i < this.v; i++) {
            for (j = 0; j < this.v; j++) {
                if (dist[i][j] == inf) {
                    document.write(" inf ");
                } else {
                    document.write("    " + dist[i][j] + " " + dist[i][j] + " ");
                }
            }

            document.write("<br />");
        }
    }
}
