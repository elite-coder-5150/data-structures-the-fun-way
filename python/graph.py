class graph():
    def __init__(self, v):
        self.num_nodes = []
        self.adj_list = {}
        self.visited = False
        self.v = []
        
    def insert_node(self, data):
        if data not in self.adj_list:
            self.adj_list[data] = []
            self.num_nodes += 1
            
            return
        
    def insert_edge(self, a, b):
        if b not in self.adj_list:
            self.adj_list[a].append(b)
            self.adj_list[b].append(a)
            return
        
        return "edge already exists"
    
    """
    the text two functions are a part of the hamiltonian cycle dection system.
    """
    def is_cycle(self):
        visited = [False] * self.v
        parent = [False] * self.v
        
        for node in range(self.v):
            if visited[node] == False:
                if self.is_cycle_util(node, visited, parent) == True:
                    return True
        return False
    
    def is_cycle_util(self, v, visited, parent):
        visited[v] = True
        parent[v]= True
        
        for neighbor in self.graph[v]:
            if self.is_cycle_util(neighbor, visited, parent) == True:
                return True

            elif parent[neighbor] == True:
                return True
            
        parent[v] = False
        return False
    
        """_summary_
        end aof the cycle detection.
        """
    def show_connection(self):
        for node in self.adj_list:
            print(f'{node} -> {" ".join(map(str, self.adj_list[node]))}')
