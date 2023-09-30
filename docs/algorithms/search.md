## Documentation for the Search algorithms.

### Sentinel search 
the sentinel search algorithm is a variation of the linear
search algorithm, its designed to imporove the efficiency of searching for
a specific element in a list or array by reducingthe number of comparisons
typeically required in the standard linear search pattern. The key concept behind this algorithms is to add a sentinel or a guard element at the end of the list that serves as the target element you are searching for. This approach allows you to eliminate the need to check whether you've reached the end of the list during the search, which potentially saving one comparison per search.

the algorithm has the following steps
1. add a sentinel element with the value you are searching for at the end of the list.
2. starts searching from the beginning of the list.
3. coompare the current elemeent with the target value.
4. if the current value matches the target value, stop the search and return thie index.
5. if the current elemeent i snot the target value, increment the index and continue the search.
6. repeat setps 3-5 until yuou find the target valuye or reach the sentinel element (which is guaranteed to be found)

```pseudocode
sentinal_search(arr, target):
    n = arr.length;
    last_elem = arr[n-1];
    arr[n-1] = target
    i = 0;
å
    while (arra[i] != target):
        i + 1;
    arr[i] = last_elem

    if (i < n - 1):
        return i;
    else:
        return "elem not found"
```

---

## Binary Search

The binary search is an efficient searching algorithm that works on sorted arrays or lists by repeatedly dividing the search interval in hhalf.

1. start with the whole array.
2. compute the middle index of the current search interval
3. compare the middle index of the with the target value.
4. if the middle element is equal to the target, return its index (element was found);
5. if the middle element is greater then the target, narrow the search to the left half.
6. if the middle element is less then the target, narrow the search to the right half                      
7. repeat steps 2-6 until the t arget is found or the search interval becomes empty.


```pseodocode
binary_search(arr, target):
    left = 0
    right = arr.length - 1;

    while left < right:
        mid = left + (right - left) / 2;

        if arr[mid] == target:
            return mid;

        else if arr[mid] > target:
            right = mid - 1;

        else:
            left = m + 1;

    reutrn -1;
```

Binary search words efficiently for sorted arryas because it eliminates