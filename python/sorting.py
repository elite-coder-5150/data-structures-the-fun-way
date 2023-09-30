class sorting:
    def __init__(self, name):
        self.name = name
        
    def quick_sort(arr):
        if len(arr) < 2:
            return arr
        
        else:
            pivot = arr[-1]