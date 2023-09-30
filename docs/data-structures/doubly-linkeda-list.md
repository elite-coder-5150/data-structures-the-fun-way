## Documentation for the doubly linked list data structure

## Description

#### this code can be implemented in a variety of programming languages
```pseudocode


add(value):
    pre value is the vlau eto add to the list
    post: the value has been placed at the tail of the list
    
    n -> node(value)
    if head == 0:
        head -> node;
        tail -> node;
    else:
        n.prev -> tail;
        tail.next -> n;
        tail -> n;
    end if;
end add(value);
```

```pseudocode
delete(head, value):
    pre: 
```