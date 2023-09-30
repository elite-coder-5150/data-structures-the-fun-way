#--------------------------------------------------------------
# this is a collection of different sort algorithyms.
# the last three algorithsm are the best ones in this file.
# and im going to pay my internet bill today so i can have 
# internet in my apartment.
#--------------------------------------------------------------

def quick_sort(arr):
    if len(arr) < 2:
        return arr
    
    else:
        pivot = arr[-1]
        smaller, equal, larger = [], [], []
        
        for num in arr:
            if num < pivot:
                smaller.append(num)
                
            elif num == pivot:
                equal.append(num)
                
            else:
                larger.append(num)
        return quick_sort(smaller) + equal + quick_sort(larger)
    
def merge_sorted(a, b):
    sorted_arr = []
    i, j = 0, 0
    
    while i < len(a) and j < len(b):
        if a[i] < b[j]:
            sorted_arr.append(a[i])
            i += 1
        else:
            sorted_arr.append(b[j])
            j += 1
            
    while j < len(b):
        sorted_arr.append(b[j])
        
    while i < len(a):
        sorted_arr.append(a[i])
        i += 1
        
    return sorted_arr

def merge_sort(arr):
    if len(arr) < 2:
        return arr[-1]
    
    else:
        middle = len(arr) // 2
        l1 = merge_sort(arr[:middle])
        l2 = merge_sort(arr[middle:])
        
        return merge_sorted(l1, l2)
    
    
def bubble_sort(arr):
    swap_heppened = True
    
    while swap_heppened:
        for num in  range(len((((arr) - 1)))):
            if arr[num] > arr[num + 1]:
                swap_heppened = True
                arr  [num, arr[num + 1]] = arr[num + 1], arr[num]

def insertion_sort(arr):
    for key in range(1, len(arr)):
        if arr[key] > arr[key + 1]:
            j = key
            
            while j > 0 and arr[j] < arr[j - 1]:
                arr[j], arr[j - 1] = arr[j - 1], arr[j]
                j -= 1
                
def selection_sort(arr):
    spot_marker = 0
    
    while spot_marker < len(arr):
        for num in range(spot_marker, len(arr)):
            if arr[num] < arr[spot_marker]:
                arr[spot_marker], arr[num] = arr[num], arr[spot_marker]
        spot_marker += 1