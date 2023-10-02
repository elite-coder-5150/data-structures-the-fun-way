def getResult(n):
    preOdd = 1
    preEven = 1
    
    num = str(n)
    
    for i in range(len(num)):
        if (i % 2 == 0):
            preOdd = preOdd * int(num[i])
        else:
            preEven = preEven * int(num[i])
    
    if (preOdd % 2 == 0):
        print("yes")
        
    else:
        print("no")
        
    # driver code
    if __name__ == "__main__":
        n = 4324
        getResult(n)