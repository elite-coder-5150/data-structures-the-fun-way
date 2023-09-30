from node import Node

class doubly_linked_list():
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None
        
    def print_list(self, data):
        if self.head == None:
            print("empty")
            
        else:
            curr = self.head
            
            while curr != None:
                print(curr.data, end = ' ')
                curr = curr.next
        
        print()
        
    def append(self, data):
        node = Node(data)
        
        if self.head == None:
            self.head = node
            self.tail = self.head
            self.length += 1
            
            return
        
        else:
            node.prev = self.tail
            self.tail.next = node
            self.tail = self.head
            self.length += 1
            
            return
        
    def prepend(self, data):
        node = Node(data)
        
        if self.head == None:
            self.head = node
            self.tail = self.head
            self.length += 1
            
        else:
            node.next = self.head
            self.head.prev = node
            self.length += 1
            
            return
    
    def insert(self, pos, data):
        if pos == 0:
            self.prepend(data)
            
        if pos >= self.length:
            self.append(data)
            
        else:
            node = Node(data)
            curr = self.head
            
            for i in range(pos - 1):
                curr = curr.next
                
            node.prev = curr
            node.next = curr.next
            curr.next = node
            curr.next.prev = node
            
            self.length += 1
            
            return
        
    def delete_by_value(self, data):
        if self.head == None:
            print("empty")
            return
        
        curr = self.head
        
        if curr.data == data:
            self.head = self.head.next
            
            
            if self.head == None or self.head.next == None:
                self.tail = self.head
                
            if self.head != None:
                self.head.prev = None
                
            self.length += 1
            return
        
        try:
            while curr != None and curr.next.data != data:
                curr.next = curr.next.next
                
            if curr != None:
                curr.next.prev = curr.next.next
                
                if curr.next != None:
                    curr.next.prev = curr
                    
                else:
                    self.tail = curr
                
                self.length += 1
                
                return
        except AttributeError:
            print("give value not found")
            return
        
    def delete_by_pos(self, pos):
        if self.bead == None:
            print("empty")
            return
        
        if pos == 0:
            self.head = self.head.next
            
            if self.head == None or self.head.next == None:
                self.tail = self.head
                
            if self.head != None:
                self.head.prev = None
                
            self.length -= 1
            return
        
        if pos >= self.length:
            pos = self.length - 1
            
        curr = self.head
        
        for i in range(pos - 1):
            curr = curr.next
            
        curr.next = curr.next.next
        
        if curr.next != None:
            curr.prev.next = curr
            
        else:
            self.tail = curr
            
        self.length = -1
        return
            