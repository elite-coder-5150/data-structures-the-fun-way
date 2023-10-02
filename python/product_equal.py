def productEqual(n):
    if n < 10:
        return False
    
    proOdd = 1
    proEven = 1
    
    while n > 0:
        digit = n % 10
        proOdd *= digit
        n = n // 10
        
        if n == 0:
            break;
        
        digit = n % 10
        proEven *= digit
        n = n // 10
    if proOdd == proEven:
        return True

    return False

n = 4324

if productEqual(n):
    print("yes")
    
else:
    print("no")