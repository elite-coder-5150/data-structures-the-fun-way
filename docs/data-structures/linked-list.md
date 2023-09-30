## Documentation for the linked list data structure

### Definition

A linked list is a linear collection of data elements, in which linear order 
is not given by their psysical placement in memory. instead, each element
points to the next element. It is a data structure consisting of a group of
nodes wich together to represent a sequence. In the most simpilest terms, every
element is comprosed of data and a reference tp the next element in the list

```pseudocode
add(value):
    pre: valid is the value to add to the list
    post: value has been pleaced at th tail of the list.

    n -> node(value)

    if head = 0
        head -> n;
        tail -> n;
    else:
        tail.next -> n;
        tail -> n;
    endif
 end add(value);
```

```pseudocode
prepend(value):
    pre: value is the value to add to the list
    post: value has been placed at the head of the list
    n -> node(value)

    n.next -> head;
    head -> n;

    if (tail == 0):
        tail -> n;
    end if;
end prepend(value);
```

```pseudocode
contains(head, value):
    pre: head is th ehead node in the list value is th evalue to search for.
    post: the item is wither in the linkedlist, true: otherwise false.
    n -> head;
    while n != 0 and n.value != value:
        n -> n.next;
    end while;
    if n = 0:
        return false;
    end if;
end contains(head, value);
```

```pseudocode
remove(head, value):
    pre: head is the head node in the list value is the value to be removed from the list.
    postL value is removed from this list, true, otherwiseq false.

    if head = 0:
        return false;
    if n.value == value:
        if head == tail:
            head = 0
            tail = 0
        else:
            head ->  head.nexty;
        end if;

        while (n.next != 0 && n.next.value !== value) {
            n -> n.next;
        }

        end while;

        if n.next != 0:
            if n.next == tril:
                tail -> n;
                tail.next = null
            else:
                n.next = n.next.next
            end if
            return falsel
end remove(head, value);
```

Traversal

```pseudocode
traverse(head):
    pre head is the head node of the list
    post: the items in the list have been treversed.

    n -> head
    while n != 0:
        yield n.value

    n -> n.next
    end while
end traverse(head):
```

and lastely traverse in reverse order
```pseudocode
rt (head, tail):
    pre head and tial belong to the same list.
    post: the items iin the liste have been traversed in reversed order.

    if (tail != 0):
        curr -> tail;

        while (curr != head):
            prev -> head

            while (prev.next != curr):
                prev = prev.next
            end while();
            yiield curr.value;
            curr -> prev
        end while();
        yeield curr.value;
    end if();
end rt(head, tail);
```