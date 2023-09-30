from importing import Person
from max_heap import max_heap

#----------------------------------------------------------------
#
#----------------------------------------------------------------
from contains_duplicates import bf_duplicate_search, duplicate_search, dup_search

class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        
    
class bst:
    def __init__(self) -> None:
        self.root = None
        self.numNodes = 0
        
    def insert(self, data):
        new_node = Node(data)
        
        if self.root == None:
            self.root = new_node
            self.numNodes += 1
            
            return
        
        else:
            curr = self.root
            
            while (curr.left != new_node) and (curr.right != new_node):
                if new_node.data > curr.data:
                    if curr.right == None:
                        curr.right = new_node
                        
                    else:
                        curr = curr.right
                        
                elif new_node.data < curr.data:
                    if curr.left == None:
                        curr.left = new_node
                        
                    else:
                        curr = curr.left
            self.numNodes += 1
            return
                
    
    def search(self, data):
        if self.root == None:
            return "the tree is empty"
        
        else:
            curr = self.root
            
            while True:
                if curr == None:
                    return "not found"
                
                if curr.data == data:
                    return "found"
                
                elif curr.data >  data:
                    curr = curr.left
                    
                elif curr.data < data:
                    curr = curr.right
                    
                    
    def remove(self, data):
        if self.root == None:
            return "empty"
        
        curr = self.root
        parent = None
        
        while curr != None:
            if curr.data > data:
                parent = curr
                curr = curr.left
            elif curr.data < data:
                parent = curr
                curr = curr.right
                
            else:
                # base case
                # node has left child only
                if curr.right == None:
                    if parent == None:
                        self.root = curr.left
                        return
                    else:
                        if parent.data > curr.data:
                            parent.left = curr.left
                            return
                        else:
                            parent.right = curr.right
            
                elif curr.left == None:
                    if parent == None:
                        self.root = curr.right
                        return
                    else:
                        if parent.data > curr.data:
                            parent.left = curr.right
                            return
                        else:
                            parent.right = curr.right;
                
                elif curr.left == None and curr.right == None:
                    if parent == None:
                        curr = None
                        return
                    
                    if parent.data > curr.data:
                        parent.left = None;
                        return    
                    else:
                        parent.right = None
                        return
                
                elif curr.left != None and curr.right != None:
                    deleted = curr.right
                    dp = curr.right
                    
                    while deleted.left != None:
                        dp = deleted
                        deleted = deleted.left
                    
                    curr.data = deleted.data
                    
                    if deleted == dp:
                        curr.right = deleted.right
                        return
                    
                    if deleted.right == None:
                        dp = None
                        return
                    
                    else:
                        deleted.left = deleted.right
                        return
        return "Not found"
        
bst = bst()

darrell = Person("darrell", 52)

print(darrell.greet())

