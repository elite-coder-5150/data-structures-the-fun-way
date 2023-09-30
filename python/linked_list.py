from node import Node

class linked_list():
    def __init__(self):
        self.head = None
        self.tail = self.head
        self.length = 0
        
    def reverse(self, _list):
        if linked_list.length <= 0:
            return linked_list
        
        else:
            first = _list.head
            second = first.next
            _list.tail = _list.head
            
            while second:
                temp = second.next
                second.next = first
                first = second
                second = temp
                
            list.head.next = None
            list.head = first
            
            return _list
    
    def append(self, data):
        node = Node(data)
        
        if self.head is None:
            self.head = node
            self.tail = self.head
            self.size += 1
            
        else:
            node.next = self.head
            self.head = node
            self.length += 1
            
    def prepend(self, data):
        node = Node(data)
        
        if self.head == None:
            self.head = node
            self.tail = self.head
            self.length += 1
        
        else:
            node.next = self.head
            self.head = node
            self.length += 1
            
    def print_list(self):
        if self.head == None:
            print("empty")
            
        else:
            curr = self.head
            
            while curr != None:
                print(curr.data, end=' ')
                curr = curr.next
        
        print()
            
    def insert(self, pos, data):
        if pos >= self.length:
            if pos > self.length:
                print("This position is not available.")
                
            node = Node(data)
            self.tail.next = node
            self.tail = node
            self.length += 1
            
        elif pos == 0:
            node = Node(data);
            node.next = self.head
            self.head = node
            self.size += 1
            
        else:
            node = Node(data)
            curr = self.head
            
            for i in range(pos - 1):
                curr = curr.next
                
            node.next = curr.next
            curr.next = node
            self.size += 1
    
    def delete_by_value(self, data):
        if self.head == None:
            print("Linked list is empty")
            
        curr = self.head
        
        if curr.data == data:
            self.head = self.head.next
            
            if self.head == None and self.head.next == None:
                self.tail = self.head
            
            self.length -= 1
            return
        
        while self.head.next != None and curr.next.data != data:
            curr = curr.next
            
        
        if curr.next != None:
            curr.next = curr.next.next
            
            
            if curr.next == None:
                self.tail = curr
                
            self.length -= 1
            return
        
        else:
            print("the given value not found")
            
    def delete_by_pos(self, pos):
        if self.head == None:
            print("the given value not found");
            
        if pos == 0:
            self.head = self.head.next
            
            if self.head == None and self.head.next ==  None:
                self.tail = self.head
                
            if pos >= self.length:
                pos = self.length - 1
                
            
            curr = self.head
            
            for i in range(pos - 1):
                curr = curr.next
                
            curr.next = curr.next.next
            self.length -= 1
            
            if curr.next == None:
                self.tail = curr
            return
            
            