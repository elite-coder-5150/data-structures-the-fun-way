class Graph {
    int v;
    list<int>* adj

    bool isCycleUtil(int v, bool, visited[], bool* result);

public:
    Graph(int v);
    void addEdge(int v, int w);
    bool isCyclic();
}