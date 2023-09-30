#include <vector>
struct Edge {
    int start, end, weight;
    Edge(int start, int end, int weight);
};

bool compareEdges(const Edge& a, const Edge& b) {
    return a.weight < b.weight;
}

struct disJointSet {
    vector<int> parent;
    DisjointSet(int n) {
        parent.resize(n);

        for (int i = 0; i < n; ++n) {
            parent[i] = i;
        }
    }

    int find(int node) {
        if (parent[node] )
    }
};

