def bf_duplicate_search(arr):
    for i in range(len(arr) - 1):
        for j in range(i + 1, len(arr)):
            if arr[i] == arr[j]:
                return True
    return False

def duplicate_search(arr):
    arr.sort()
    
    for i in range(len(arr) - 1):
        if arr[i] == arr[i + 1]:
            return True
    return False

def dup_search(arr):
    dict = dict()
    
    if len(arr) < 2:
        return False

    else:
        for i in range(len(arr)):
            if arr[i] in dict:
                return True
            
            else:
                dict[arr[i]] = True
    return False

first_search = bf_duplicate_search()
second_search = duplicate_search()
final_search = dup_search()