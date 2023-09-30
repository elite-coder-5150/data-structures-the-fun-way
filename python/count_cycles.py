import math as mt

def cycles(n):
    fact = 1
    result = n - 1
    
    i = result
    
    while (i > 0):
        fact = fact * i
        i -= 1
        
    return fact // 2