import sys

class max_heap:
    def __init__(self, max_size):
        self.max_size = max_size
        self.size = 0
        self.Heap = [0] * (self.max_size + 1)
        self.Heap[0] = sys.maxsize
        self.front = 1
        
    def parent(self,pos):
        return pos // 2
    
    def left_child(self,pos):
        return (2 * pos) + 1
    
    def right_child(self,pos):
        return (2 * pos) + 2
    
    def is_leaf(self, pos):
        if pos >= (self.size // 2) and pos <= self.size:
            return True
        
        return False
    
    def swap(self, fpos, spos):
        self.Heap[fpos], self.Heap[spos] = self.Heap[spos], self.Heap[fpos]
        
    def max_heapify(self, pos):
        if not self.is_leaf(pos):
            if (self.Heap[pos] < self.Heap[self.right_child(pos)]) or self.Heap[pos] < self.right_child(pos):
                if self.Heap[self.left_child(pos)] > self.Heap[self.right_child(pos)]:
                    self.swap(pos, self.left_child(pos))
                    self.max_heapify(self.left_child(pos))
                
                else:
                    self.swap(pos, self.right_child(pos))
                    self.max_heapify(self.right_child(pos))
                    
    def insert(self, elem):
        if self.size >= self.max_size:
            return
        
        self.size += 1
        self.Heap[self.size] = elem
        curr = self.size
        
        while self.Heap[curr] > self.Heap[self.parent(curr)]:
            self.swap(curr, self.parent(curr))
            curr = self.parent(curr)
            

    def print_heap(self):
        for i in range(1, (self.size // 2) + 1):
            print(" parent : " + str(self.Heap[i]) + " left child: " + str(self.Heap[(2 * i) + 1]) + " right child: " + str(self.Heap[(2 * i) + 2]))
            
    def extract_heap(self):
        popped = self.Heap[self.front]
        self.Heap[self.front] = self.Heap[self.size]
        self.size -= 1
        self.max_heapify(self.front)
        
        return popped
    

    