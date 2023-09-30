class Graph():
    def __init__(self, nodes):
        self.graph = [[0 for col in range(nodes)] 
                         for row in range(nodes)]
        self.v = nodes
        
    def is_safe(self, v, pos, path):
        if self.graph[path[pos - 1]][v] == 0:
            return False
            
        for node in path:
            if node == v:
                return False
        return True
        
    def hamiltonian_cycle_util(self, path, pos):
        if pos == self.v:
            if self.graph[path[pos - 1]][path[0]] == 1:
                return True
                
            else:
                return False
            
        for v in range(1, self.v):
            if self.is_safe(v, pos, path) == True:
                path[pos] = v

                if self.hamiltonian_cycle_util(path, pos + 1) == True:
                    return True
                
                # remove current node if it
                # doesn't lead to a solution
                path[pos] = -1
        return False
    
    def hamiltonian_cycle(self):
        path = [-1] * self.v
        path[0] = 0
        
        if self.hamiltonian_cycle_util(path, 1) == False:
            print('solution does not exists')
            return False
        
    def print_solution(self, path):
        print('solution exists: following is one hamiltonian')
        
        for node in path:
            print(node, end = ' ')
            
        print(path[0], "\n")