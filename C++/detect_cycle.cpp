#include "detect_cycle.h"

Graph::Graph(int v) {
    this->v = v;
    adj = new list<int>[v];
}

Graph::addEdge(int v, int w) {
    adj[v].push_back(w);
}

bool Graph::isCycleUtil(int v, bool visited[], bool* result) {
    if (visited[v] == false) {
        visited[v] = true;
        result[v] = true;

        list<int>::iterator i;

        for (i = adj[v].begin(); i < adj[v].end(); ++i) {
            if (!visited[*i] && this->isCycleUtil(*i, visited, result)) {
                return true;
            } else if (result[*i]) {
                return true;
            }
        }
    }

    result[v] = false;
    return false;
}

bool Graph::isCyclic() {
    bool* visited = new bool[this->v];
    bool* result = new bool[this->v];

    for (int i = 0; i < this->v; i++) {
        visited[i] = false;
        result[i] = false;
    }

    for (int i = 0; i < this->v; i++) {
        if (!visited[i] && this->isCycleUtil(i, visited, result)) {
            return true
        }
    }

    return false;
}

int main() {
    Graph g(4);

    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);

    if (g.isCyclic()) {
        std::cout << "graph cotains a cycle" << std::endl;
    } else {
        std::cout << "graph doesn't contain a cycle" << std::endl;
    }

    return 0
}